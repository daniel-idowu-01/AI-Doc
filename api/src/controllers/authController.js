const User = require('../model/User');
const Token = require('../model/token');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
} = require('../services/email.services');
const {
  generateResetPasswordToken,
  verifyToken,
  generateVerifyEmailToken,
} = require('../services/token.services');

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'email and password are required' });
  }
  try {
    const existingUser = await User.findOne({ email }).exec();
    if (!existingUser) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const payload = {
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
    };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '7d',
    });

    const refreshToken = jwt.sign(
      { email: existingUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    existingUser.refreshToken = refreshToken;
    existingUser.accessToken = accessToken;
    await existingUser.save();

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      /*secure: true,*/ sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: 'Login successful',
      user: { ...payload },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res
      .status(400)
      .json({ message: 'Email, name and password are required' });
  }

  try {
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await User.create({
      email,
      name,
      password: hashedPassword,
    });
    res.status(201).send({
      message: 'User created successfully',
      user: {
        id: result._id,
        email: result.email,
        name: result.name,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const refreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }
  const refreshToken = cookies.jwt;

  const existingUser = await User.findOne({ refreshToken }).exec();
  if (!existingUser) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err || existingUser.email !== user.email) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    const payload = {
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
    };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '7d',
    });
    res.json({ accessToken });
  });
};

const logout = async (req, res) => {
  // on client logout, delete the cookie

  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(204);
  }
  const refreshToken = cookies.jwt;

  const existingUser = await User.findOne({
    refreshToken: refreshToken,
  }).exec();
  if (!existingUser) {
    res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'none' });
    return res.status(204).json({ message: 'Logged out' });
  }

  //delete refresh token
  existingUser.refreshToken = '';
  await existingUser.save();

  res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'none' });
  res.status(204).json({ message: 'Logged out' });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const resetPasswordToken = await generateResetPasswordToken(email);
    if (!resetPasswordToken) {
      throw new Error('Failed to generate reset password token');
    }
    await sendResetPasswordEmail(email, resetPasswordToken);

    res.status(200).json({ message: 'Reset password email sent' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const resetPassword = async (req, res) => {
  const { password } = req.body;
  const { token } = req.query;
  try {
    const resetPasswordTokenDoc = await verifyToken(token, 'resetPassword');
    const user = await User.findById(resetPasswordTokenDoc.userId).exec();
    if (!user) {
      throw new Error('User not found');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    await Token.deleteMany({ user: user._id, type: 'resetPassword' });
    
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendVerifyEmail = async (req, res) => {
  const email = req.user.email;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  try {
    const existingUser = await User.findOne({ email }).exec();
    if (!existingUser) {
      return res.status(400).json({ message: 'User not found' });
    }
    const verifyEmailToken = await generateVerifyEmailToken(existingUser._id);

    if (!verifyEmailToken) {
      return res.status(400).json({ message: 'Failed to generate verify email token' });
    }
    await sendVerificationEmail(email, verifyEmailToken);

    res.status(200).json({ message: 'Verification email sent' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const verifyEmail = async (req, res) => {
  const { token } = req.query;
  try {
    const verifyEmailTokenDoc = await verifyToken(token, 'verifyEmail');
    const user = await User.findById(verifyEmailTokenDoc.userId);
    if (!user) {
      throw new Error('User not found');
    }
    user.isEmailVerified = true;
    await user.save();
    await Token.deleteMany({ user: user._id, type: 'verifyEmail' });
    res.status(200).json({ message: 'Email verified' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  register,
  refreshToken,
  logout,
  forgotPassword,
  resetPassword,
  sendVerifyEmail,
  verifyEmail,
};
