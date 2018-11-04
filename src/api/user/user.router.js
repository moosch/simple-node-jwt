const express = require('express');

const authMiddleware = require('../../auth/auth.middleware');
const userController = require('./user.controller');

const router = express.Router();

router.post('/create', userController.create);

router.post('/login', userController.login);

router.post('/logout', authMiddleware.isAuthenticated, userController.logout);

router.post('/delete', authMiddleware.isAuthenticated, userController.delete);

module.exports = router;
