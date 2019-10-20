import {
  getTheMinimumFromPozitiveNumbers,
  getTheMinimumFromNegativeNumbers,
  getTheMinimumFromEvenNumbers,
  getTheMinimumFromOddNumbers,
  getTheMinimumFromPerfectSquaresNumbers,
  getTheMinFromNumbersOnEvenPosition,
  getTheMinFromNumbersDivisibleBy3,
  getTheMinFromNumbersDividedBy5,
  getTheMinOfSquares,
} from '../src/minimum';

describe('Minimum', () => {
  it('returns the minimum from the positive numbers', () => {
    const arr = Object.freeze([3, 8, 5, 2, -3, -8]);
    expect(getTheMinimumFromPozitiveNumbers(arr)).toBe(2);
  });

  it('returns the minimum from the negative numbers', () => {
    const arr = Object.freeze([3, 8, -5, 2, -3, -8]);
    expect(getTheMinimumFromNegativeNumbers(arr)).toBe(-8);
  });

  it('returns the minimum from the even numbers', () => {
    const arr = Object.freeze([3, 7, 2, 8, 4, 9]);
    expect(getTheMinimumFromEvenNumbers(arr)).toBe(2);
  });

  it('returns the minimum from the odd numbers', () => {
    const arr = Object.freeze([3, 7, -2, 8, -4, 9, -3]);
    expect(getTheMinimumFromOddNumbers(arr)).toBe(-3);
  });

  it('returns the minimum from the perfect squares numbers', () => {
    const arr = Object.freeze([4, 9, 19, 5, 6, -6]);
    expect(getTheMinimumFromPerfectSquaresNumbers(arr)).toBe(4);
  });

  it('returns the minimum from numbers which are on even position', () => {
    const arr = Object.freeze([3, 1, 6, 9, 5, 2, 8]);
    expect(getTheMinFromNumbersOnEvenPosition(arr)).toBe(5);
  });

  it('returns the minimum from numbers which are divisible by 3', () => {
    const arr = Object.freeze([3, 1, 7, 9]);
    expect(getTheMinFromNumbersDivisibleBy3(arr)).toBe(3);
  });

  it('returns the minimum from numbers which divided by 5 the rest is 3', () => {
    const arr = Object.freeze([13, 8, 5, 2, 10]);
    expect(getTheMinFromNumbersDividedBy5(arr)).toBe(8);
  });

  it('returns the minimum of squares', () => {
    const arr = Object.freeze([2, 9, 5, 7, 4, 81]);
    expect(getTheMinOfSquares(arr)).toBe(4);
  });
});
