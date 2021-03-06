const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express();

app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', function(req, res) {
  res.status(200).send({ message: 'The app is up!' })
});

module.exports = app
