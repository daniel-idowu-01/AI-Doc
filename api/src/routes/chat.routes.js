const { Router } = require('express');
const verifyJWT = require('../middleware/verifyJWT.js');

const chatRoutes = Router();

chatRoutes.get('/');

module.exports = chatRoutes;
