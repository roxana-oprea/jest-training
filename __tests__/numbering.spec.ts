import { getPositiveNumbers, getNegativeNumbers } from '../src/numbering';

describe('Numbering', () => {
  it('return the elements which are positive numbers', () => {
    const arr = Object.freeze([1, -4, 2, -1, 3, -3]);
    expect(getPositiveNumbers(arr)).toEqual([1, 2, 3]);
  });

  it('return the elements which are negative numbers', () => {
    const arr = Object.freeze([3, 2, -1, 9, -8]);
    expect(getNegativeNumbers(arr)).toEqual([-1, -8]);
  });
});
