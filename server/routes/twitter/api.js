const request = require('request-promise-native');

const consumerKey = process.env.TWITTER_CONSUMER_KEY;
const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
let token = process.env.TWITTER_TOKEN;

// TODO: get full tweets

if (!consumerKey || !consumerSecret) {
  throw Error('Twitter environment variable(s) missing');
}

function getAuthToken() {
  if (token) return Promise.resolve(token);
  const encoded = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

  return request
    .post({
      url: 'https://api.twitter.com/oauth2/token',
      body: 'grant_type=client_credentials',
      headers: {
        Authorization: `Basic ${encoded}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
    .then((res) => {
      if (res.token_type !== 'bearer') throw Error('bad token type');
      token = res.access_token;
      return token;
    })
    .catch((reason) => {
      throw Error(`Could not get twitter auth token. ${reason}`);
    });
}

async function search(hashtag) {
  // TODO: support options like limit
  const authToken = await getAuthToken();
  return request
    .get({
      url: `https://api.twitter.com/1.1/search/tweets.json?count=50&q=${encodeURIComponent(hashtag)}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((response) => {
      const json = JSON.parse(response);
      return json.statuses.map((status) => status.text);
    })
    .catch((reason) => {
      // todo: handle RequestError
      // if auth fail re-authenticate
      // eslint-disable-next-line
      const { statusCode, error, message } = reason;
      return Promise.reject({
        statusCode,
        error: message ? { message } : JSON.parse(error),
      });
    });
}

module.exports = {
  search,
};
