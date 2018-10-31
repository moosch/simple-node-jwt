const tokenManager = require('../auth/tokenManager');
const db = require('../database/db');

module.exports = {
  isAuthenticated(req, rea, next) {
    const token = req.headers.authorization.replace('Bearer ', '');
    const verified = tokenManager.verify(token);

    if (!verified) {
      res.status(404).send('Invalid token');
      return;
    }

    req.token = verified;

    next();
  },
};
