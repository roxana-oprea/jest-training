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
  checkArrayForAnyOddNumber,
  checkArrayForAnyNumberDivisibleBy4,
  checkArrayForAnyOddNumberAndBiggerThan15,
  ascendingSort,
  descendingSort,
  constantArray,
  equalLengthOfArrays,
  checksFirst3Elements,
  checksFirstAndLast3Elements,
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

  it('checks if the array does not contain any odd element', () => {
    const arr = Object.freeze([1, 9, 3, 5]);
    expect(checkArrayForAnyOddNumber(arr)).toBe(false);
  });

  it('checks if the array does not contain elements divisible by 4', () => {
    const arr = Object.freeze([16, 19, 33, 5]);
    expect(checkArrayForAnyNumberDivisibleBy4(arr)).toBe(false);
  });

  it('checks if the array does not contain odd elements and bigger than 15', () => {
    const arr = Object.freeze([16, 9, 23, 5, 17]);
    expect(checkArrayForAnyOddNumberAndBiggerThan15(arr)).toBe(false);
  });

  it('sorts the elements of an array ascending', () => {
    const arr = Object.freeze([16, 9, 23, 5, 17]);
    expect(ascendingSort(arr)).toEqual([5, 9, 16, 17, 23]);
  });

  it('sorts the elements of an array descending', () => {
    const arr = Object.freeze([16, 9, 23, 5, 17]);
    expect(descendingSort(arr)).toEqual([23, 17, 16, 9, 5]);
  });

  it('checks for a constant array', () => {
    const arr = Object.freeze([16, 16, 16]);
    expect(constantArray(arr)).toBe(true);
  });

  it('checks for the equal length of 2 arrays', () => {
    const arr1 = Object.freeze([1, 6, 5]);
    const arr2 = Object.freeze([2, 4, 9]);
    expect(equalLengthOfArrays(arr1, arr2)).toBe(true);
  });

  it('cheks if first array has first 3 elements equals with firts 3 elements from second array', () => {
    const arr1 = Object.freeze([1, 2, 3, 6, 5]);
    const arr2 = Object.freeze([1, 2, 3, 4, 9]);
    expect(checksFirst3Elements(arr1, arr2)).toBe(true);
  });

  it('cheks if first array has first 3 elements equals with last 3 elements from second array', () => {
    const arr1 = Object.freeze([1, 2, 3, 6, 5]);
    const arr2 = Object.freeze([4, 9, 3, 2, 1]);
    expect(checksFirstAndLast3Elements(arr1, arr2)).toBe(true);
  });
});
