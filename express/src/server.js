'use strict';

const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

const server = app.listen(port, () => {
  console.log('server launched on', port);
});
server.setTimeout(5000);

function terminate() {
  console.log('terminating the server');
  server.close(() => {
    console.log('the server is terminated');
  });
}

process.on('SIGINT', terminate);
process.on('SIGTERM', terminate);
