const { Router } = require('express');
const { getUsers } = require('../controllers/usersController.js');
const verifyJWT = require('../middleware/verifyJWT.js');

const userRoutes = Router();

userRoutes.get('/', verifyJWT, getUsers);

module.exports = userRoutes;
