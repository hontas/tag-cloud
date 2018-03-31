const { expect } = require('chai');
const { isHashTag } = require('./validators');

describe('validators', () => {
  describe('#isHashTag', () => {
    it('should be a function', () => {
      expect(isHashTag).to.be.a('function');
    });

    it('should return true for valid hashtags', () => {
      ['#epic_fail', '#yomama65', '#hontas'].forEach((hashTag) => {
        expect(isHashTag(hashTag), hashTag).to.be.true();
      });
    });

    it('should return false for invalid hashtags', () => {
      ['epicfail', '#yom ama', '#hon-tas'].forEach((hashTag) => {
        expect(isHashTag(hashTag), hashTag).to.not.be.true();
      });
    });
  });
});
