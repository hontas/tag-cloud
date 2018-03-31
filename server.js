require('dotenv').config();
const express = require('express');
const next = require('next');
const addRouteHandlers = require('./server/routes');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const nextHandler = app.getRequestHandler();

// TODO: add request logging

app.prepare().then(() => {
  const server = express();

  addRouteHandlers(server);

  server.get('*', nextHandler);

  server.listen(port, (err) => {
    if (err) throw err;
    // eslint-disable-next-line
    console.log('> Ready on http://localhost:3000');
  });
});
