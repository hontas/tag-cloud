const twitterApi = require('./api');
const cleanTweet = require('../../utils/cleanTweet');
const getTagsFromText = require('../../../common/getTagsFromText');
const { isHashTag } = require('../../../common/validators');

// TODO: calculate tags in childprocess / worker
// TODO: support stop words from user
const stopWords = ['the', 'and', 'for', 'that', 'att', 'för', 'och'];

function get(req, res) {
  const query = req.query.q;
  if (!isHashTag(query)) return res.status(400).json({ message: 'Query must be a valid hashtag' });

  return twitterApi
    .search(query)
    .then((tweets) => tweets.map(cleanTweet).join(' '))
    .then((text) => getTagsFromText(text, { stopWords }))
    .then((tags) => res.json(tags.slice(0, 100)))
    .catch((reason) => {
      // eslint-disable-next-line
      console.log(reason);
      const { statusCode, error, message } = reason;
      res.status(statusCode || 500).json(error || { message });
    });
}

module.exports = {
  get,
};
