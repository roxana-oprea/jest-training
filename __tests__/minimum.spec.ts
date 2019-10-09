import {
  getTheMinimumFromPozitiveNumbers,
  getTheMinimumFromNegativeNumbers,
  getTheMinimumFromEvenNumbers,
  getTheMinimumFromOddNumbers,
  getTheMinimumFromPerfectSquaresNumbers,
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
    const arr = Object.freeze([-4, 9, 19, 5, 6, -6]);
    expect(getTheMinimumFromPerfectSquaresNumbers(arr)).toBe(-4);
  });
});
