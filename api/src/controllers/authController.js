const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

    res
      .status(200)
      .json({ message: 'Login successful', user: { ...payload }, accessToken, refreshToken });
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

    console.log(result);
    res.Status(201).send({
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
  console.log(cookies.jwt);
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
    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '7d' }
    );
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

module.exports = {
  login,
  register,
  refreshToken,
  logout,
};
