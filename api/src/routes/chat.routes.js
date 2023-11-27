const { Router } = require('express');
const verifyJWT = require('../middleware/verifyJWT.js');
const chatController = require('../controllers/chatController.js');

const chatRoutes = Router();

chatRoutes.post('/', verifyJWT, chatController.generateChat);

module.exports = chatRoutes;
