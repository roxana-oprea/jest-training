export function productPositiveNumbers(arr: number[]): number {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) product *= arr[i];
  }
  return product;
}

export function productNegativeNumbers(arr: number[]): number {
  let product = 1;
  arr.map(item => {
    if (item !== 0 && item < 0) product *= item;
  });
  return product;
}

export function productOddNumbers(arr: number[]): number {
  let product = 1;
  arr.map(item => {
    if (item !== 0 && item % 2 === 0) product *= item;
  });
  return product;
}

export function productEvenNumbers(arr: number[]): number {
  let product = 1;
  arr.map(item => {
    if (item !== 0 && item % 2 !== 0) product *= item;
  });
  return product;
}

export function productSquaresNumbers(arr: number[]): number {
  let product = 1;
  arr.map(item => {
    const number = Math.floor(Math.sqrt(item));
    if (item > 0 && number * number === item) product *= item;
  });
  return product;
}

export function productNumbersWithEvenIndex(arr: number[]): number {
  let product = 1;
  arr.map((item, index) => {
    if (index % 2 === 0) product *= item;
  });
  return product;
}

export function productNumbersDividedBy3(arr: number[]): number {
  let product = 1;
  arr.map(item => {
    if (item % 3 === 0) product *= item;
  });
  return product;
}
