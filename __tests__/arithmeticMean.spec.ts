import {
  getAMPositiveNumbers,
  getAMNegativeNumbers,
  getAMEvenNumbers,
  getAMOddNumbers,
  getAMPerfectSquaresNumbers,
  getAMofNumbersAtEvenPosition,
} from '../src/arithmeticMean';

describe('Arithmetic Mean', () => {
  it('calculates the arithmetic mean of positive numbers', () => {
    const arr = Object.freeze([1, -4, 2, -1, 3, -3]);
    expect(getAMPositiveNumbers(arr)).toBe(2);
  });

  it('calculates the arithmetic mean of negative numbers', () => {
    const arr = Object.freeze([1, -4, 2, -2, 3, -3]);
    expect(getAMNegativeNumbers(arr)).toBe(-3);
  });

  it('calculates the arithmetic mean of the even numbers', () => {
    const arr = Object.freeze([-2, 2, 5, 8, -6, 10]);
    expect(getAMEvenNumbers(arr)).toBe(2.4);
  });

  it('calculates the arithmetic mean of odd numbers', () => {
    const arr = Object.freeze([-1, 10, 5, -3, 7, 4, 2]);
    expect(getAMOddNumbers(arr)).toBe(2);
  });

  it('calculates the aritmetic mean of the perfect squares numbers', () => {
    const arr = Object.freeze([4, 9, 19, 5, 6, -6]);
    expect(getAMPerfectSquaresNumbers(arr)).toBe(6.5);
  });

  it('calculates the aritmetic mean of numbers at even position', () => {
    const arr = Object.freeze([3, 1, 2, 4, 1]);
    expect(getAMofNumbersAtEvenPosition(arr)).toBe(2);
  });
});
