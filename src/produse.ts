export function productPositiveNumbers(arr: number[]): number {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) product *= arr[i];
  }
  return product;
}
