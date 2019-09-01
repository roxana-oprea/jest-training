import {
  addsPositiveNumbers,
  addsNegativeNumbers,
  addsEvenNumbers,
  addsOddNumbers,
  addsPerfectSquaresNumbers,
  addsNumbersAtEvenPosition,
  addsNumbersDivisibleBy3,
} from '../src/sume';

describe('Sume', () => {
  it('adds positive numbers', () => {
    const arr = Object.freeze([1, -4, 2, -1, 3, 3]) as number[];
    expect(addsPositiveNumbers(arr)).toBe(9);
  });

  it('adds negative numbers', () => {
    const arr = Object.freeze([-3, 1, 3, 7, -1]) as number[];
    expect(addsNegativeNumbers(arr)).toBe(-4);
  });

  it('adds even numbers', () => {
    const arr = Object.freeze([1, 7, 2, 4, 5, 9]) as number[];
    expect(addsEvenNumbers(arr)).toBe(6);
  });

  it('adds odd numbers', () => {
    const arr = Object.freeze([1, 5, 2, 6, 8]) as number[];
    expect(addsOddNumbers(arr)).toBe(6);
  });

  it('adds perfect squares numbers', () => {
    const arr = Object.freeze([4, 9, 19, 5, 6, -6]) as number[];
    expect(addsPerfectSquaresNumbers(arr)).toBe(13);
  });

  it('adds numbers at even position', () => {
    const arr = Object.freeze([2, 1, 2, 4, 1]) as number[];
    expect(addsNumbersAtEvenPosition(arr)).toBe(3);
  });

  it('adds numbers which are divisible by 3', () => {
    const arr = Object.freeze([3, 1, 7, 9]) as number[];
    expect(addsNumbersDivisibleBy3(arr)).toBe(12);
  });
});
