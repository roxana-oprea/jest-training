import {
  getAMPositiveNumbers,
  getAMNegativeNumbers,
  getAMEvenNumbers,
  getAMOddNumbers,
  getAMPerfectSquaresNumbers,
  getAMofNumbersAtEvenPosition,
  getAMofNumbersDivisibleBy3,
  getAMofNumbersDividedBy5,
  getAMofSquares,
  getAMofNumbersInInterval,
  getAMofPositiveNumbersAndDevidedBy5,
  getAMofNumbersDevidedBy3And2,
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

  it('calculates the arithmetic mean of which are divisible by 3', () => {
    const arr = Object.freeze([3, 1, 7, 9]);
    expect(getAMofNumbersDivisibleBy3(arr)).toBe(6);
  });

  it('calculates the arithmetic mean of numbers divided by 5 the rest is 3', () => {
    const arr = Object.freeze([13, 8, 5, 2]);
    expect(getAMofNumbersDividedBy5(arr)).toBe(10.5);
  });

  it('calculates the arithmetic mean of squares', () => {
    const arr = Object.freeze([3, 4]);
    expect(getAMofSquares(arr)).toBe(12.5);
  });

  it('calculates the arithmetic mean of numbers between interval [-1, 9]', () => {
    const arr = Object.freeze([2, 12, -1, 8, 16]);
    expect(getAMofNumbersInInterval(arr)).toBe(3);
  });

  it('calculates the arithmetic mean of positive numbers and divided by 5', () => {
    const arr = Object.freeze([-2, 1, 5, -5, 10]);
    expect(getAMofPositiveNumbersAndDevidedBy5(arr)).toBe(7.5);
  });

  it('calculates the arithmetic mean of numbers which are on even position and are divisible by 3 and 2', () => {
    const arr = Object.freeze([2, 3, 6, 5, 12]);
    expect(getAMofNumbersDevidedBy3And2(arr)).toBe(9);
  });
});
