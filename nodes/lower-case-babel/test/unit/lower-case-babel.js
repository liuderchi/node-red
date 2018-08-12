import lowerCaseBabel from '../../src/lower-case';

describe('lowerCaseBabel', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(lowerCaseBabel, 'greet');
      lowerCaseBabel.greet();
    });

    it('should have been run once', () => {
      expect(lowerCaseBabel.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(lowerCaseBabel.greet).to.have.always.returned('hello');
    });
  });
});
