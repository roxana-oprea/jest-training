import {
  getFirstEvenNumber,
  getFirstOddNumber,
  getFirstNumberDivisibleBy4,
  getFirstOddNumberAndGraterThan15,
  getLastEvenNumber,
  getLastOddNumber,
  getLastNumberDivisibleBy4,
  getLastOddNumberAndGraterThan15,
  getTheIndexOfNthOccurrenceEvenNumber,
  getTheIndexOfNthOccurrenceOddNumber,
  getTheIndexOFNthOccurancedivisibleBy4,
  getTheIndexOfNthOccuranceOddNumberAndGraterThan15,
} from '../src/searches';

describe('Searches', () => {
  it('returns the first even number', () => {
    const arr = Object.freeze([3, 1, 5, 2]);

    expect(getFirstEvenNumber(arr)).toBe(2);
    expect(getFirstEvenNumber([])).toBeUndefined();
    expect(getFirstEvenNumber([1, 3, 5])).toBeUndefined();
  });

  it('returns the firts odd number', () => {
    const arr = Object.freeze([0, -5, 4, -3]);

    expect(getFirstOddNumber(arr)).toBe(-5);
    expect(getFirstOddNumber([])).toBeUndefined();
    expect(getFirstOddNumber([2, 4, 6])).toBeUndefined();
  });

  it('returns the firts number which is divisible by 4', () => {
    const arr = Object.freeze([3, -1, 5, 2, 16]);

    expect(getFirstNumberDivisibleBy4(arr)).toBe(16);
    expect(getFirstNumberDivisibleBy4([])).toBeUndefined();
    expect(getFirstNumberDivisibleBy4([3, -1, 5, 2])).toBeUndefined();
  });

  it('returns the first odd number which is greater than 15', () => {
    const arr = Object.freeze([22, 3, 41, 43]);

    expect(getFirstOddNumberAndGraterThan15(arr)).toBe(41);
    expect(getFirstOddNumberAndGraterThan15([])).toBeUndefined();
    expect(getFirstOddNumberAndGraterThan15([-2, 4, 5, 22])).toBeUndefined();
  });

  it('returns the last even number', () => {
    const arr = Object.freeze([2, 3, 1, -4]);

    expect(getLastEvenNumber(arr)).toBe(-4);
    expect(getLastEvenNumber([])).toBeUndefined();
    expect(getLastEvenNumber([-1, 3, -9, 5])).toBeUndefined();
  });

  it('returns the last odd number', () => {
    const arr = Object.freeze([3, 2, -2, 8, 98]);

    expect(getLastOddNumber(arr)).toBe(3);
    expect(getLastOddNumber([])).toBeUndefined();
    expect(getLastOddNumber([-2, 66, 4, 8])).toBeUndefined();
  });

  it('returns the last number which is divisible by 4', () => {
    const arr = Object.freeze([3, -1, 5, 2, 16]);

    expect(getLastNumberDivisibleBy4(arr)).toBe(16);
    expect(getLastNumberDivisibleBy4([])).toBeUndefined();
    expect(getLastNumberDivisibleBy4([33, 13, 55])).toBeUndefined();
  });

  it('return the last odd number which is greater than 15', () => {
    const arr = Object.freeze([22, 3, 41, 43]);

    expect(getLastOddNumberAndGraterThan15(arr)).toBe(43);
    expect(getLastOddNumberAndGraterThan15([])).toBeUndefined();
    expect(getLastOddNumberAndGraterThan15([16, 22, 3, 5])).toBeUndefined();
  });

  it('returns the index of n-th occurance of even number', () => {
    const arr = Object.freeze([2, -1, 3, 4, 5, 8, 7]);

    expect(getTheIndexOfNthOccurrenceEvenNumber(arr, 3)).toBe(5);
    expect(getTheIndexOfNthOccurrenceEvenNumber([], 3)).toBe(-1);
    expect(getTheIndexOfNthOccurrenceEvenNumber([15, 21, 3, 5, 17, 11], 3)).toBe(-1);
  });

  it('returns the index of n-th occurance of odd number', () => {
    const arr = Object.freeze([2, -1, 3, 4, 5, 8, 7]);

    expect(getTheIndexOfNthOccurrenceOddNumber(arr, 3)).toBe(4);
    expect(getTheIndexOfNthOccurrenceOddNumber([], 3)).toBe(-1);
    expect(getTheIndexOfNthOccurrenceOddNumber([16, 22, 4, 6, 18, 12], 3)).toBe(-1);
  });

  it('returns the index of n-th occurance divisible by 4', () => {
    const arr = Object.freeze([-2, 16, 9, 4, 8, 21]);

    expect(getTheIndexOFNthOccurancedivisibleBy4(arr, 3)).toBe(4);
    expect(getTheIndexOFNthOccurancedivisibleBy4([], 3)).toBe(-1);
    expect(getTheIndexOFNthOccurancedivisibleBy4([2, 5, -13, 7, 9], 3)).toBe(-1);
  });

  it('returns the index of n-th occurance of odd number and grater than 15', () => {
    const arr = Object.freeze([17, 3, 33, 6, 8, 21]);

    expect(getTheIndexOfNthOccuranceOddNumberAndGraterThan15(arr, 3)).toBe(5);
    expect(getTheIndexOfNthOccuranceOddNumberAndGraterThan15([], 3)).toBe(-1);
    expect(getTheIndexOfNthOccuranceOddNumberAndGraterThan15([2, 3, 6, 1, 14, 13], 3)).toBe(-1);
  });
});
