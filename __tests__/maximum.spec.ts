import {
  getTheMaximumFromPozitiveNumbers,
  getTheMaximumFromNegativeNumbers,
  getTheMaximumFromEvenNumbers,
} from '../src/maximum';

describe('Maximums', () => {
  it('returns the maximum from the positive numbers', () => {
    const arr = Object.freeze([3, 1, 5, 2]);
    expect(getTheMaximumFromPozitiveNumbers(arr)).toBe(5);
  });

  it('returns the maximum from the negative numbers', () => {
    const arr = Object.freeze([-3, -1, -5, -2]);
    expect(getTheMaximumFromNegativeNumbers(arr)).toBe(-1);
  });

  it('returns the maximum from the even numbers', () => {
    const arr = Object.freeze([3, 7, 2, 8, 4, 9]);
    expect(getTheMaximumFromEvenNumbers(arr)).toBe(8);
  });
});
