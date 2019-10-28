import {
  getNewArrPozitiveNumbers,
  returnNumDivisibleBy3,
  returnPositionsWithPositiveNum,
  returnPositionsOfNegativeNum,
  returnPositions,
} from '../src/constructions';

describe('Constructions', () => {
  it('returns new array containing all positive numbers from array x and y', () => {
    const x = Object.freeze([4, -1, -5, 2, -8]);
    const y = Object.freeze([3, 12, -5, -2]);
    expect(getNewArrPozitiveNumbers(x, y)).toEqual([4, 2, 3, 12]);
  });

  it('returns new array containing all numbers from array x which are divisible by 3', () => {
    const x = Object.freeze([1, 9, 4, 7, 3, 12]);
    expect(returnNumDivisibleBy3(x)).toEqual([9, 3, 12]);
  });

  it('returns an array with the positions with positive numbers', () => {
    const x = Object.freeze([-1, -9, 4, -7, -3, 12]);
    expect(returnPositionsWithPositiveNum(x)).toEqual([2, 5]);
  });

  it('returns new array containing the positions of negative numbers', () => {
    const x = Object.freeze([-13, -5, 4, 2, -3, 12]);
    expect(returnPositionsOfNegativeNum(x)).toEqual([0, 1, 4]);
  });

  it('returns new array containing the positions of numbers whitch are equals with a given number', () => {
    const x = Object.freeze([-13, 5, 4, 5, -3, 12]);
    const number = 5;
    expect(returnPositions(x, number)).toEqual([1, 3]);
  });
});
