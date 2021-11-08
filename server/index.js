const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
module.exports.app = app;

const PORT = 3000;
app.set('port', PORT);
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});