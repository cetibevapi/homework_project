require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {

  dbConfig: {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "1234",
    DB: process.env.DB_NAME || "app",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  auth: {
    secret: process.env.AUTH_SECRET || "Llkajsl091jd209821jdkjs!@$%@#"
  }
};
