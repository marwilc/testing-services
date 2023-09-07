import { Calculator } from './calculator';

beforeAll(() => {
  window.onbeforeunload = () => 'Oh no!';
});

describe('Test for Calculator', () => {
  describe('Test for multiply', () => {
    it('should return a nine', () => {
      //arrange
      const calculator = new Calculator();
      //act
      const rta = calculator.multiply(1, 4);

      //asserts
      expect(rta).toEqual(4);
    });
  });

  describe('Test for divide', () => {
    it('should return a some numbers', () => {
      const calculator = new Calculator();

      expect(calculator.divide(6, 3)).toEqual(2);
      expect(calculator.divide(5, 2)).toEqual(2.5);
    });

    it('for zero', () => {
      const calculator = new Calculator();

      expect(calculator.divide(5, 0)).toBeNull();
    });

    it('tests matchers', () => {
      const name = 'nicolas';

      let name2;

      expect(name).toBeDefined();
      expect(name2).toBeUndefined();

      expect(1 + 3 === 4).toBeTruthy();
      expect(1 + 1 === 3).toBeFalsy();

      expect(5).toBeLessThan(10);
      expect(20).toBeGreaterThan(10);

      expect('123456').toMatch(/123/);
      expect(['apples', 'oranges', 'pears']).toContain('oranges');
    });
  });
});
