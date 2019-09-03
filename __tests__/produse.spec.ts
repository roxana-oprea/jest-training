import { productPositiveNumbers } from '../src/produse';

describe('Sume', () => {
  it('calculates the product of positive numbers', () => {
    const arr = Object.freeze([1, -4, 2, -1, 3, 3]) as number[];
    expect(productPositiveNumbers(arr)).toBe(18);
  });
});
