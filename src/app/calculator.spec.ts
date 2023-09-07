import { Calculator } from './calculator';

describe('Test for Calculator', () => {
  it('#multiply should return a nine', () => {
    //arrange
    const calculator = new Calculator();
    //act
    const rta = calculator.multiply(3, 3);
    //asserts
    expect(rta).toEqual(9);
  });
});
