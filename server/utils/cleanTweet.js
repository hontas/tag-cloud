module.exports = function cleanTweet(tweet) {
  return tweet
    .replace(/#[^\b\s\n]+\s*/g, '')
    .replace(/@[^\b\s\n]+\s*/g, '')
    .replace(/https?:\/\/[^\b\s\n]+\s*/g, '');
};
