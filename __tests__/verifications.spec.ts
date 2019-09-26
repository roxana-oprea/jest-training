import {
  checkAllEvenNumbers,
  checkAllOddNumbers,
  checkNumbersDivisibleBy4,
  checkOddNumbersAndBiggerThan15,
  hasAtLeastOneEvenElement,
  hasAtLeastOneOddElement,
  hasAtLeastOneElementDivisibleBy4,
  hasAtLeastOneOddNumberAndBiggerThan15,
  checkArrayForAnyEvenNumber,
} from '../src/verifications';

describe('Verifications', () => {
  it('checks if all the elements are even', () => {
    const arr = Object.freeze([3, 1, 5, 2]);
    expect(checkAllEvenNumbers(arr)).toBe(false);
  });

  it('checks if all the elements are odd', () => {
    const arr = Object.freeze([3, 1, 5, 9]);
    expect(checkAllOddNumbers(arr)).toBe(true);
  });

  it('checks if all the elements are divisible with 4', () => {
    const arr = Object.freeze([16, 36, 4]);
    expect(checkNumbersDivisibleBy4(arr)).toBe(true);
  });

  it('checks if all elements are odd and bigger than 15', () => {
    const arr = Object.freeze([4, 23, 19, 33, 45]);
    expect(checkOddNumbersAndBiggerThan15(arr)).toBe(false);
  });

  it('checks if the array has at least one even element', () => {
    const arr = Object.freeze([5, 9, 15, 2, 4]);
    expect(hasAtLeastOneEvenElement(arr)).toBe(true);
  });

  it('checks if the array has at least one odd element', () => {
    const arr = Object.freeze([8, 6, 4, 2]);
    expect(hasAtLeastOneOddElement(arr)).toBe(false);
  });

  it('checks if the array has at least one element divisible by 4', () => {
    const arr = Object.freeze([1, 2, 3, 5]);
    expect(hasAtLeastOneElementDivisibleBy4(arr)).toBe(false);
  });

  it('checks if the array has at least one odd element and bigger than 15', () => {
    const arr = Object.freeze([4, 23, 19, 33, 45]);
    expect(hasAtLeastOneOddNumberAndBiggerThan15(arr)).toBe(true);
  });

  it('checks if the array does not contain any even element', () => {
    const arr = Object.freeze([1, 9, 3, 5]);
    expect(checkArrayForAnyEvenNumber(arr)).toBe(true);
  });
});
