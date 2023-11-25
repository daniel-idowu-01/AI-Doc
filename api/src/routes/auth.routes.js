const express = require("express");
const authRoutes = express.Router();
const authController = require("../controllers/authController");
const validate = require("../middleware/validate");
const authValidation = require("../validations/auth.validation");

authRoutes.post("/login", validate(authValidation.loginValidator), authController.login);
authRoutes.post('/register', validate(authValidation.registerValidator), authController.register);
authRoutes.get('/logout', authController.logout);
authRoutes.get('/refresh-token', authController.refreshToken);

module.exports = authRoutes;
