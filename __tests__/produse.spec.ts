import {
  productPositiveNumbers,
  productNegativeNumbers,
  productOddNumbers,
  productEvenNumbers,
  productSquaresNumbers,
  productNumbersWithEvenIndex,
  productNumbersDividedBy3,
  productNumbersDividedBy5,
  productOfSquares,
  productNumbersInInterval,
  productOfPositiveNumbersAndDevisibleBy5,
  productOfNumbersDevidedBy3And2,
  prodyctOfOddNumberAndHigherThan15,
  productOfPerfectSquaresAndEvenNumbers,
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

  it('calculates the product of numbers divided by 5 the rest is 3', () => {
    const arr = Object.freeze([13, 8, 5, 2]) as number[];
    expect(productNumbersDividedBy5(arr)).toBe(104);
  });

  it('calculated the product of squares', () => {
    const arr = Object.freeze([2, 3, 4]) as number[];
    expect(productOfSquares(arr)).toBe(576);
  });

  it('calculates product between interval [-1, 9]', () => {
    const arr = Object.freeze([2, 12, -1, 8, 16]) as number[];
    expect(productNumbersInInterval(arr)).toBe(-16);
  });

  it('calculates the product of positive numbers and divisible by 5', () => {
    const arr = Object.freeze([-2, 1, 5, -5, 10]) as number[];
    expect(productOfPositiveNumbersAndDevisibleBy5(arr)).toBe(50);
  });

  it('calculates the product of numbers divided by 3 and 2 and are at even position', () => {
    const arr = Object.freeze([2, 3, 6, 5, 12]) as number[];
    expect(productOfNumbersDevidedBy3And2(arr)).toBe(72);
  });

  it('calculates the product of odd numbers and higher than 15', () => {
    const arr = Object.freeze([2, 3, 17, 19, 14]) as number[];
    expect(prodyctOfOddNumberAndHigherThan15(arr)).toBe(323);
  });

  it('calculates the product of perfect squares numbers and are even', () => {
    const arr = Object.freeze([4, 9, 19, 5, 6]) as number[];
    expect(productOfPerfectSquaresAndEvenNumbers(arr)).toBe(4);
  });
});
