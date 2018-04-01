require('dotenv').config();
const next = require('next');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const nextHandler = app.getRequestHandler();

// TODO: add custom logger https://expressjs.com/en/advanced/best-practice-performance.html#do-logging-correctly

app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(morgan(dev ? 'dev' : 'common'));

  routes(server);
  server.get('*', nextHandler);

  server.listen(port, (err) => {
    if (err) throw err;
    // eslint-disable-next-line
    console.log('> Ready on http://localhost:3000');
  });
});
