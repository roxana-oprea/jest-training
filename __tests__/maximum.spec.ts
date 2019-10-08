import {
  getTheMaximumFromPozitiveNumbers,
  getTheMaximumFromNegativeNumbers,
  getTheMaximumFromEvenNumbers,
  getTheMaximumFromOddNumbers,
  getTheMaximumFromPerfectSquaresNumbers,
  getTheMaxFromNumbersOnEvenPosition,
  getTheMAxFromNumbersDivisibleBy3,
  getTheMaxFromNumbersDividedBy5,
  getTheMaxOfSquares,
  getTheMaxOfNumbersBetweenInterval,
  getTheMaxOfPosNumbersAndDivisibleBy5,
  getTheMaxFromNumbersOnEvenPositionAndDevisibleBy3,
  getTheMaximumFromOddNumbersAndBiggerThan15,
  getTheMaximumFromSquaresandEvenNumbers,
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

  it('returns the maximum from the odd numbers', () => {
    const arr = Object.freeze([3, 7, 2, 8, 4, 9]);
    expect(getTheMaximumFromOddNumbers(arr)).toBe(9);
  });

  it('returns the maximum from the perfect squares numbers', () => {
    const arr = Object.freeze([4, 9, 19, 5, 6, -6]);
    expect(getTheMaximumFromPerfectSquaresNumbers(arr)).toBe(9);
  });

  it('returns the maximum from numbers which are on even position', () => {
    const arr = Object.freeze([3, 1, 6, 9, 5, 2, 8]);
    expect(getTheMaxFromNumbersOnEvenPosition(arr)).toBe(8);
  });

  it('returns the maximum from numbers which are divisible by 3', () => {
    const arr = Object.freeze([3, 1, 7, 9]);
    expect(getTheMAxFromNumbersDivisibleBy3(arr)).toBe(9);
  });

  it('returns the maximum from numbers which divided by 5 the rest is 3', () => {
    const arr = Object.freeze([13, 8, 5, 2]);
    expect(getTheMaxFromNumbersDividedBy5(arr)).toBe(13);
  });

  it('returns the maximum of squares', () => {
    const arr = Object.freeze([2, 3, 5, 7, 4]);
    expect(getTheMaxOfSquares(arr)).toBe(4);
  });

  it('return the maximum of numbers between [-1, 9] interval', () => {
    const arr = Object.freeze([2, 12, -1, 8, 16]);
    expect(getTheMaxOfNumbersBetweenInterval(arr)).toBe(8);
  });

  it('return the maximum of positive numbers and divisible by 5', () => {
    const arr = Object.freeze([-2, 1, 5, -5, 10]);
    expect(getTheMaxOfPosNumbersAndDivisibleBy5(arr)).toBe(10);
  });

  it('returns the maximum from numbers which are on even position and divisible by 3', () => {
    const arr = Object.freeze([3, 1, 6, 9, 5, 2, 8]);
    expect(getTheMaxFromNumbersOnEvenPositionAndDevisibleBy3(arr)).toBe(6);
  });

  it('returns the maximum from numbers which are odd ngetTheMaximumFromOddNumbersAndBiggerThan15umbers and bigger than 15', () => {
    const arr = Object.freeze([3, 7, 2, 8, 4, 9, 21]);
    expect(getTheMaximumFromOddNumbersAndBiggerThan15(arr)).toBe(21);
  });

  it('returns the maximum from numbers which are perfect squares elements and even', () => {
    const arr = Object.freeze([4, 9, 19, 5, 16]);
    expect(getTheMaximumFromSquaresandEvenNumbers(arr)).toEqual(16);
  });
});
