const { body } = require('express-validator');

const loginValidator = [
  body('email').trim().isEmail().withMessage('Email is required'),
  body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Password should contain atleast 6 characters'),
];

const registerValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  ...loginValidator,
];

const chatCompletionValidator = [
  body('message').notEmpty().withMessage('Message  is required'),
];

module.exports = {
  loginValidator,
  registerValidator,
  chatCompletionValidator,
}
