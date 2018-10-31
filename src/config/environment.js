require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  tokenExpiry: process.env.TOKEN_EXPIRY,
  secret: process.env.JWT_SECRET,
};
