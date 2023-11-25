const { Router } = require('express');
const userRoutes = require('./user.routes');
const chatRoutes = require('./chat.routes');
const authRoutes = require('./auth.routes');

const router = Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/chat',
    route: chatRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;