import {
  addsPositiveNumbers,
  addsNegativeNumbers,
  addsEvenNumbers,
  addsOddNumbers,
  addsPerfectSquaresNumbers,
  addsNumbersAtEvenPosition,
  addsNumbersDivisibleBy3,
  addsNumbersDividedBy5,
  sumOfSquares,
  addsNumbersInInterval,
  addsPositiveNumbersAndDevidedBy5,
  addsNumbersDevidedBy3And2,
  addsOddNumberAndHigherThan15,
  addPerfectSquaresAndEvenNumbers,
} from '../src/sums';

describe('Sums', () => {
  it('adds positive numbers', () => {
    const arr = Object.freeze([1, -4, 2, -1, 3, 3]);
    expect(addsPositiveNumbers(arr)).toBe(9);
  });

  it('adds negative numbers', () => {
    const arr = Object.freeze([-3, 1, 3, 7, -1]);
    expect(addsNegativeNumbers(arr)).toBe(-4);
  });

  it('adds even numbers', () => {
    const arr = Object.freeze([1, 7, 2, 4, 5, 9]);
    expect(addsEvenNumbers(arr)).toBe(6);
  });

  it('adds odd numbers', () => {
    const arr = Object.freeze([1, 5, 2, 6, 8]);
    expect(addsOddNumbers(arr)).toBe(6);
  });

  it('adds perfect squares numbers', () => {
    const arr = Object.freeze([4, 9, 19, 5, 6, -6]);
    expect(addsPerfectSquaresNumbers(arr)).toBe(13);
  });

  it('adds numbers at even position', () => {
    const arr = Object.freeze([2, 1, 2, 4, 1]);
    expect(addsNumbersAtEvenPosition(arr)).toBe(3);
  });

  it('adds numbers which are divisible by 3', () => {
    const arr = Object.freeze([3, 1, 7, 9]);
    expect(addsNumbersDivisibleBy3(arr)).toBe(12);
  });

  it('adds numbers divided by 5 the rest is 3', () => {
    const arr = Object.freeze([13, 8, 5, 2]);
    expect(addsNumbersDividedBy5(arr)).toBe(21);
  });

  it('return the sum of squares', () => {
    const arr = Object.freeze([2, 3, 4]);
    expect(sumOfSquares(arr)).toBe(29);
  });

  it('adds numbers between interval [-1, 9]', () => {
    const arr = Object.freeze([2, 12, -1, 8, 16]);
    expect(addsNumbersInInterval(arr)).toBe(9);
  });

  it('adds positive numbers and divided by 5', () => {
    const arr = Object.freeze([-2, 1, 5, -5, 10]);
    expect(addsPositiveNumbersAndDevidedBy5(arr)).toBe(15);
  });

  it('adds numbers divided by 3 and 2 and are at even position', () => {
    const arr = Object.freeze([2, 3, 6, 5, 12]);
    expect(addsNumbersDevidedBy3And2(arr)).toBe(18);
  });

  it('adds odd numbers and higher than 15', () => {
    const arr = Object.freeze([2, 3, 17, 19, 14]);
    expect(addsOddNumberAndHigherThan15(arr)).toBe(36);
  });

  it('perfect squares numbers and are even', () => {
    const arr = Object.freeze([4, 9, 19, 5, 6]);
    expect(addPerfectSquaresAndEvenNumbers(arr)).toBe(4);
  });
});
