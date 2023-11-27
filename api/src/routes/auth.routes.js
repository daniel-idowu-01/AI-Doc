const express = require("express");
const authRoutes = express.Router();
const authController = require("../controllers/authController");
const validate = require("../middleware/validate");
const authValidation = require("../validations/auth.validation");
const verityJWT = require("../middleware/verifyJWT");

authRoutes.post("/login", validate(authValidation.loginValidator), authController.login);
authRoutes.post('/register', validate(authValidation.registerValidator), authController.register);
authRoutes.get('/logout', authController.logout);
authRoutes.get('/refresh-token', authController.refreshToken);
authRoutes.post('/forgot-password', authController.forgotPassword);
authRoutes.post('/reset-password', authController.resetPassword);
authRoutes.post('/verify-email', verityJWT, authController.sendVerifyEmail);
authRoutes.get('/verify-email', authController.verifyEmail);

module.exports = authRoutes;
