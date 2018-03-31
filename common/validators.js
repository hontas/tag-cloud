// TODO: improve regex
const hashTagRegEx = /^#[\wåäö]+$/i;
const isHashTag = (value) => hashTagRegEx.test(value);

module.exports = {
  isHashTag,
};
