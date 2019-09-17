import { checkAllEvenNumbers, checkAllOddNumbers } from '../src/verifications';

describe('Verifications', () => {
  it('checks if all the elements are even', () => {
    const arr = Object.freeze([3, 1, 5, 2]);
    expect(checkAllEvenNumbers(arr)).toBe(false);
  });

  it('checks if all the elements are odd', () => {
    const arr = Object.freeze([3, 1, 5, 9]);
    expect(checkAllOddNumbers(arr)).toBe(true);
  });
});
