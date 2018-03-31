const hashTagRegEx = /#[\w\d_]+$/;
const isHashTag = (value) => hashTagRegEx.test(value);

module.exports = {
  isHashTag
};
