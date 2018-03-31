const twitterApi = require('./api/twitter');
const cleanTweet = require('./utils/cleanTweet');
const getTagsFromText = require('../common/getTagsFromText');

// TODO: calculate tags in childprocess / worker
const stopWords = ['the', 'and', 'for'];

module.exports = function handleRoutes(app) {
  app.get('/api/twitter', (req, res) => {
    twitterApi
      .search(req.query.q)
      .then((tweets) => tweets.map(cleanTweet).join(' '))
      .then((text) => getTagsFromText(text, { stopWords }))
      .then((tags) => res.json(tags.slice(0, 100)))
      .catch((reason) => {
        const { statusCode, error } = reason;
        res.status(statusCode).json(error);
      });
  });

  // TODO: add support for RSS links
  app.get('/api/rss', (req, res) => {
    res.status(500).json({ message: 'not yet implemented' });
  });
};
