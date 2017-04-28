if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
const express = require ('express');
const app = express();
const apiRouter = require('./routes/api');
const mongoose = require('mongoose');
const config = require('./config');
const db = config.DB[process.env.NODE_ENV] || process.env.PORT.DB;
const PORT = config.PORT[process.env.NODE_ENV] || process.env.PORT;

mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
  if (!err) {
    console.log(`connected to the Database: ${db}`);
  } else {
    console.log(`error connecting to the Database ${err}`);
  }
});

app.use(function (request, response, next) {
    console.log('Received request!');
    next();
});

app.use('/api', apiRouter);

app.use('/*', function (request, response) {
    response.status(404).send({reason: '404 -ROUTE NOT FOUND'});
});

app.listen(PORT, function (error) {
    if (error) {
        return console.log(error);
    }
    console.log(`listening on port ${PORT}`);
});
