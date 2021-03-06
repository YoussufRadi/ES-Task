module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'supersecret',
  jwtExpiry: process.env.JWT_EXPIRY || 60 * 60 * 24,
  host: process.env.HOST || `localhost:${process.env.PORT || 3000}/`,
  mailReset: {
    service: process.env.MAIL_SERVICE || 'Gmail',
    auth: {
      user: process.env.MAIL_USER || 'deben.reset@gmail.com',
      pass: process.env.MAIL_PASSWORD || 'test123.',
    },
  },
};
