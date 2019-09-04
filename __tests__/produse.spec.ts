import {
  productPositiveNumbers,
  productNegativeNumbers,
  productOddNumbers,
  productEvenNumbers,
  productSquaresNumbers,
  productNumbersWithEvenIndex,
  productNumbersDividedBy3,
} from '../src/produse';

describe('Sume', () => {
  it('calculates the product of positive numbers', () => {
    const arr = Object.freeze([1, -4, 2, -1, 3, 3]) as number[];
    expect(productPositiveNumbers(arr)).toBe(18);
  });

  it('calculates the product of negative numbers', () => {
    const arr = Object.freeze([-2, -1, 4, -3, 2]) as number[];
    expect(productNegativeNumbers(arr)).toBe(-6);
  });

  it('calculates the product of odd numbers', () => {
    const arr = Object.freeze([2, -3, 0, 4, 1, -2]) as number[];
    expect(productOddNumbers(arr)).toBe(-16);
  });

  it('calculates the product of even numbers', () => {
    const arr = Object.freeze([-1, 0, -3, 8, -7]) as number[];
    expect(productEvenNumbers(arr)).toBe(-21);
  });

  it('calculates the product of perfect squares numbers', () => {
    const arr = Object.freeze([4, 9, 19, 5, 6, -6]) as number[];
    expect(productSquaresNumbers(arr)).toBe(36);
  });

  it('calculates the product of numbers with even index', () => {
    const arr = Object.freeze([2, 1, -3, -2, 3, 4, 2]) as number[];
    expect(productNumbersWithEvenIndex(arr)).toBe(-36);
  });

  it('calculate the product of numbers wich are divisible by 3', () => {
    const arr = Object.freeze([3, 1, 7, 9]) as number[];
    expect(productNumbersDividedBy3(arr)).toBe(27);
  });
});
