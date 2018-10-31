const express = require('express');

const authMiddleware = require('../../auth/auth.middleware');
const tokenManager = require('../../auth/tokenManager');
const db = require('../../database/db');

const router = express.Router();

router.post('/create', (req, res) => {
  const { body } = req;
  const { username, password } = body;

  if (!username || !password) {
    res.status(400).send('Error. Please enter a username and password');
    return;
  }

  let user;
  try {
    user = db.user.create({ username, password });
  } catch (error) {
    res.status(400).send('Error creating user');
    return;
  }

  const token = tokenManager.create({
    sub: user.id,
    username,
  });

  res.status(200).send({ auth_token: token });
});

router.post('/login', (req, res) => {
  const { body } = req;
  const { username, password } = body;

  if (!username || !password) {
    res.status(400).send('Error. Please enter the correct username and password');
    return;
  }

  try {
    const user = db.user.find({ username, password });
    const token = tokenManager.create({
      sub: user.id,
      username,
    });

    res.status(200).send({ auth_token: token });
  } catch (error) {
    res.status(404).send('Login failed');
  }
});

router.post('/logout', authMiddleware.isAuthenticated, (req, res) => {
  const { token } = req;

  res.status(200).send(`Bye bye ${token.username}`);
});

router.post('/delete', authMiddleware.isAuthenticated, (req, res) => {
  const { body } = req;
  const { username, password } = body;

  // Credentials check
  if (!username || !password) {
    res.status(400).send('Please enter the correct username and password');
    return;
  }

  try {
    db.user.delete({ username, password });

    res.status(200).send('Sorry to see you go :(');
  } catch (error) {
    res.status(400).send('Unable to delete user');
  }
});

module.exports = router;
