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
  getTheMinOfNumbersBetweenInterval,
  getTheMinOfPosNumbersAndDivisibleBy5,
  getTheMinFromNumbersOnEvenPositionAndDevisibleBy3,
  getTheMinimumFromOddNumbersAndBiggerThan15,
  getTheMinFromSquaresAndEvenNumbers,
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

  it('return the minimum of numbers between [-1, 9] interval', () => {
    const arr = Object.freeze([2, 12, -1, 8, 16]);
    expect(getTheMinOfNumbersBetweenInterval(arr)).toBe(-1);
  });

  it('return the minimum of positive numbers and divisible by 5', () => {
    const arr = Object.freeze([-2, 1, 5, -5, 10]);
    expect(getTheMinOfPosNumbersAndDivisibleBy5(arr)).toBe(5);
  });

  it('returns the minimum from numbers which are on even position and divisible by 3', () => {
    const arr = Object.freeze([3, 1, 6, 9, 12, 2, 8]);
    expect(getTheMinFromNumbersOnEvenPositionAndDevisibleBy3(arr)).toBe(6);
  });

  it('returns the minimum from numbers which are odd and bigger than 15', () => {
    const arr = Object.freeze([3, 17, 2, 8, 4, 9, 21]);
    expect(getTheMinimumFromOddNumbersAndBiggerThan15(arr)).toBe(17);
  });

  it('returns the minimum from numbers which are perfect squares elements and even', () => {
    const arr = Object.freeze([4, 9, 19, 5, 16]);
    expect(getTheMinFromSquaresAndEvenNumbers(arr)).toEqual(4);
  });
});
