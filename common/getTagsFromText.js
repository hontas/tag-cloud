const natural = require('natural');

const tokenizer = new natural.CaseTokenizer();

function identity(x) {
  return x;
}

module.exports = function getTagsFrom(text, options = { stopWords: [] }) {
  if (typeof text !== 'string') throw Error('Expected argument to be of type string');

  // TODO: add options like should words be lowercased, minimum word length etc
  // improve tokenizing, add stemming ex:
  // natural.PorterStemmer.attach();
  // text.tokenizeAndStem();

  const tags = tokenizer
    .tokenize(text)
    .filter(identity)
    .filter((word) => word.length > 2)
    .map((word) => word.toLowerCase())
    .filter((word) => !options.stopWords.includes(word))
    .reduce((res, word) => {
      const { count = 0 } = res[word] || {};
      return {
        ...res,
        [word]: {
          value: word,
          count: count + 1,
        },
      };
    }, {});

  return Object.values(tags).sort((a, b) => {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  });
};
