'use strict'

const mysql = require("mysql");
var connection;
const Sequelize = require('sequelize');
const env = require('./env');

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});  

if(process.env.JAWSDB_URL){
	console.log("jaws");
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
	port: env.DATABASE_PORT,
    host: env.DATABASE_HOST,
    user: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME
    });
};  


// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../models/users.js')(sequelize, Sequelize);
db.words = require('../models/words.js')(sequelize, Sequelize);
db.userScores = require('../models/userScores.js')(sequelize, Sequelize);

//Relations
db.userScores.belongsTo(db.users);
//db.users.hasMany(db.userScores);
//db.userScores.belongsTo(db.words);
db.words.hasMany(db.userScores);




module.exports = db;