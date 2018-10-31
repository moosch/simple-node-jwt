const express = require('express');

const authMiddleware = require('../../auth/auth.middleware');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send("Welcome everyone! Here's a carrot 🥕");
});

router.get('/secure', authMiddleware.isAuthenticated, (req, res) => {
  res.status(200).send('Blast off 🚀');
});

module.exports = router;
