const moment = require('moment');
const User = require('../model/User');
const Token = require('../model/token');
const jwt = require('jsonwebtoken');

const generateToken = (userId, expires, type, secret) => {
  const iat = moment().unix();
  const payload = {
    userId,
    expires: expires.unix(),
    iat,
    type,
  };
  return jwt.sign(payload, secret);
};

const saveToken = async (token, userId, expires, type) => {
  const tokenDoc = await Token.create({
    token,
    userId,
    expires: expires.toDate(),
    type,
  });

  return tokenDoc;
};

const verifyToken = async (token, type) => {
  const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  const tokenDoc = await Token.findOne({ token, type, userId: payload.userId });
  if (!tokenDoc) {
    throw new Error('Token not found');
  }
  return tokenDoc;
};

const generateResetPasswordToken = async (email) => {
  const user = await User.findOne({ email });
  
  if (!user) {
    throw new Error('User not found');
  }

  const expires = moment().add(10, 'minutes');
  const resetPasswordToken = generateToken(
    user._id,
    expires,
    'resetPassword',
    process.env.RESET_PASSWORD_TOKEN_SECRET
  );

  await saveToken(resetPasswordToken, user._id, expires, 'resetPassword');
  return resetPasswordToken;
};

const generateVerifyEmailToken = async (userId) => {
  const expires = moment().add(10, 'minutes');
  const verifyEmailToken = generateToken(
    userId,
    expires,
    'verifyEmail',
    process.env.REFRESH_TOKEN_SECRET
  );
  await saveToken(verifyEmailToken, userId, expires, 'verifyEmail');
  return verifyEmailToken;
}

module.exports = {
  generateToken,
  saveToken,
  verifyToken,
  generateResetPasswordToken,
  generateVerifyEmailToken
}
