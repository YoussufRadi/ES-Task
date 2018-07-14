module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'supersecret',
  jwtExpiry: process.env.JWT_EXPIRY || 60 * 60 * 24,
  host: process.env.HOST || `localhost:${process.env.PORT || 3000}/`,
};
