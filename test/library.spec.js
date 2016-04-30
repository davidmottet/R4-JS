import chai from 'chai';
import Library from '../lib/R4.js';

chai.expect();

const expect = chai.expect;

var lib;

describe('Given an instance of my R4', function () {
  before(function () {
    lib = new R4();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('R4');
    });
  });
});
