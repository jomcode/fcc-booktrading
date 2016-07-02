if (process.env.NODE_ENV !== 'production') require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3030,
  public: '../../../dist',
  mongodb: process.env.DATABASE_URL || process.env.DEV_MONGO,
  auth: {
    idField: '_id',
    token: {
      secret: process.env.JWT_SECRET ||
        'MNwt5daxH3V3YqSj7oBb1frMQnswG/1N+hGbRNxkLOaSDMrNr12+I4VcrckpkVnyhUxFv2uVMZZnT/kGm+wBiQ=='
    }
  },
  googleBooksKey: process.env.GOOGLE_BOOKS_KEY
};
