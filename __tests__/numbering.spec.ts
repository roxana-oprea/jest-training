import {
  getPositiveNumbers,
  getNegativeNumbers,
  getEvenNumbers,
  getOddNumbers,
  getPerfectSquares,
  getNumbersAtEvenPosition,
  getElementsDivisibleBy3,
  getElementsDivisibleBy5,
  getElementsInInterval,
  getElementsPositiveAndDivisibleBy5,
  getElementsDevidedBy3And2,
  getOddElementsBiggerThan15,
  getPerfectSquaresAndEvenElements,
} from '../src/numbering';

describe('Numbering', () => {
  it('returns the elements which are positive numbers', () => {
    const arr = Object.freeze([1, -4, 2, -1, 3, -3]);
    expect(getPositiveNumbers(arr)).toEqual([1, 2, 3]);
  });

  it('returns the elements which are negative numbers', () => {
    const arr = Object.freeze([3, 2, -1, 9, -8]);
    expect(getNegativeNumbers(arr)).toEqual([-1, -8]);
  });

  it('returns the elements which are even numbers', () => {
    const arr = Object.freeze([3, 2, 7, 8, 4, 9]);
    expect(getEvenNumbers(arr)).toEqual([2, 8, 4]);
  });

  it('returns the elements which are odd numbers', () => {
    const arr = Object.freeze([1, 5, 2, 3, 8, 10]);
    expect(getOddNumbers(arr)).toEqual([1, 5, 3]);
  });

  it('returns the elements which are perfect squares', () => {
    const arr = Object.freeze([4, 9, 19, 5, 16, -6]);
    expect(getPerfectSquares(arr)).toEqual([4, 9, 16]);
  });

  it('returns the elements which are at even position', () => {
    const arr = Object.freeze([2, -1, 4, -5, -7]);
    expect(getNumbersAtEvenPosition(arr)).toEqual([2, 4, -7]);
  });

  it('returns the elements which are divisible by 3', () => {
    const arr = Object.freeze([2, 3, 1, -5, 9, 6]);
    expect(getElementsDivisibleBy3(arr)).toEqual([3, 9, 6]);
  });

  it('returns the elements divided by 5 the rest is 3', () => {
    const arr = Object.freeze([13, 8, 5, 2]);
    expect(getElementsDivisibleBy5(arr)).toEqual([13, 8]);
  });

  it('returns the elements between interval [-1, 9]', () => {
    const arr = Object.freeze([2, 1, 7, -2, 9, 15]);
    expect(getElementsInInterval(arr)).toEqual([2, 1, 7, 9]);
  });

  it('return the elements which are positive and divisible with 5', () => {
    const arr = Object.freeze([-2, 1, 5, -5, 10]);
    expect(getElementsPositiveAndDivisibleBy5(arr)).toEqual([5, 10]);
  });

  it('returns the elements divided by 3 and 2 and are at even position', () => {
    const arr = Object.freeze([2, 3, 6, 5, 12, 18]);
    expect(getElementsDevidedBy3And2(arr)).toEqual([6, 12]);
  });

  it('returns the odd elements and bigger than 15', () => {
    const arr = Object.freeze([23, 33, 6, 5, 12, 19]);
    expect(getOddElementsBiggerThan15(arr)).toEqual([23, 33, 19]);
  });

  it('return perfect squares elements which are even', () => {
    const arr = Object.freeze([4, 9, 19, 5, 16]);
    expect(getPerfectSquaresAndEvenElements(arr)).toEqual([4, 16]);
  });
});
