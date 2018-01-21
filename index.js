const bodyParser = require('body-parser');
const config = require('./config/config');
const express = require('express');
const path = require('path');

//start server instance
const app = express();

//parsers for requests and cookies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//pathing
app.use(express.static(path.join(__dirname, '/')));

app.use('/', (req, res) => {
  res.sendFile(path.resolve('./app/views/index.html'));
});

//server
const server = app.listen(config.port, () => {
  console.warn('Navigate to localhost:3000 to start Waldo Pizza!');
});
