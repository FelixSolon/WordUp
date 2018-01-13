'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./config/db.js'),
  env = require('./config/env'),
  router = require('./router/index');

const app = express();
const PORT = env.PORT;

app.use(bodyParser.json());

/* app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});  */

app.all('/*', function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
 res.header("Access-Control-Allow-Methods", "POST, GET");
next();
});

router(app, db);

//if the tables don't exist, create them
db.sequelize.sync().then(() => {
   console.log("Database Connection Successful");
   app.listen(PORT, () => {
      console.log('Express listening on port:', PORT);
  });
});