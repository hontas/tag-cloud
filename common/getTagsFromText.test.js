const { expect } = require('chai');
const getTagsFromText = require('./getTagsFromText');

describe('getTagsFromText', () => {
  it('should throw when argument is not string', () => {
    expect(() => getTagsFromText()).to.throw();
  });

  it('should return an array', () => {
    expect(getTagsFromText(''))
      .to.be.an('array')
      .with.length(0);
  });

  it('should return sorted array with counted occurances', () => {
    const result = getTagsFromText('svn svn perforce git git git');
    const expected = [{ value: 'git', count: 3 }, { value: 'svn', count: 2 }, { value: 'perforce', count: 1 }];
    expect(result).to.eql(expected);
  });

  it('should filter out words with less than 3 characters', () => {
    const result = getTagsFromText('to be or not to be');
    expect(result).to.eql([{ value: 'not', count: 1 }]);
  });

  it('should convert all words to lowercase before comparison', () => {
    const result = getTagsFromText('hey HEY Hey');
    expect(result).to.eql([{ value: 'hey', count: 3 }]);
  });

  it('should support swedish', () => {
    const result = getTagsFromText('ögon');
    expect(result).to.eql([{ value: 'ögon', count: 1 }]);
  });

  it('should exclude stop-words', () => {
    const result = getTagsFromText('the fox jumped over the tree', { stopWords: ['the'] });
    expect(result).to.eql([
      { value: 'fox', count: 1 },
      { value: 'jumped', count: 1 },
      { value: 'over', count: 1 },
      { value: 'tree', count: 1 },
    ]);
  });
});
