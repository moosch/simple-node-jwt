const jwt = require('jsonwebtoken');

const config = require('../config/environment');

const jwtOptions = {
  expiresIn: config.tokenExpiry,
};

module.exports = {
  create(data) {
    const token = jwt.sign(data, config.secret, jwtOptions);
    return token;
  },
  verify(token) {
    return jwt.verify(token, config.secret);
  },
}
