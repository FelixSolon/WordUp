'use strict';

const env = {
  PORT: process.env.PORT || 8080,
  DATABASE_URL: process.env.DATABASE_URL || 'd6ybckq58s9ru745.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  DATABASE_NAME: process.env.DATABASE_NAME || 'c9fjv8pkjjtv6azk',
  DATABASE_HOST: process.env.DATABASE_HOST || 'd6ybckq58s9ru745.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'hykuvq55gjku9o59',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'td3mbbe4b9ahkcrh',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;

