const twitterController = require('./twitter/controller');

module.exports = function handleRoutes(app) {
  app.get('/api/twitter', twitterController.get);

  // TODO: add support for RSS links
  app.get('/api/rss', (req, res) => {
    res.status(501).json({ message: 'RSS not yet implemented' });
  });
};
