const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});