const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const port = require('./config').port;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/tasks', require('./routes'));

app.listen(port, () => console.log('Listening on port ', port));