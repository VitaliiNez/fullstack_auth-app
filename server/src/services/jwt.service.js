const jwt = require('jsonwebtoken');
require('dotenv').config();

const sign = (user) => {
  const token = jwt.sign(user, process.env.JWT_KEY, {
    expiresIn: '5s',
  });

  return token;
};

const verify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (error) {
    return null;
  }
};

const signRefresh = (user) => {
  const token = jwt.sign(user, process.env.JWT_REFRESH_KEY);

  return token;
};

const verifyRefresh = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_KEY);
  } catch (error) {
    return null;
  }
};

module.exports = {
  sign,
  verify,
  signRefresh,
  verifyRefresh,
};
