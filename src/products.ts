export function productPositiveNumbers(arr: readonly number[]): number {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) product *= arr[i];
  }
  return product;
}

export function productNegativeNumbers(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    if (item !== 0 && item < 0) product *= item;
  });
  return product;
}

export function productOddNumbers(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    if (item !== 0 && item % 2 === 0) product *= item;
  });
  return product;
}

export function productEvenNumbers(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    if (item !== 0 && item % 2 !== 0) product *= item;
  });
  return product;
}

export function productSquaresNumbers(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    const number = Math.floor(Math.sqrt(item));
    if (item > 0 && number * number === item) product *= item;
  });
  return product;
}

export function productNumbersWithEvenIndex(arr: readonly number[]): number {
  let product = 1;
  arr.map((item, index) => {
    if (index % 2 === 0) product *= item;
  });
  return product;
}

export function productNumbersDividedBy3(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    if (item % 3 === 0) product *= item;
  });
  return product;
}

export function productNumbersDividedBy5(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    if (item % 5 === 3) product *= item;
  });
  return product;
}

export function productOfSquares(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    if (item !== 0) product *= item * item;
  });
  return product;
}

export function productNumbersInInterval(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    if (item >= -1 && item <= 9) product *= item;
  });
  return product;
}

export function productOfPositiveNumbersAndDevisibleBy5(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    if (item > 0 && item % 5 === 0) product *= item;
  });
  return product;
}

export function productOfNumbersDevidedBy3And2(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    if (item > 0 && item % 3 === 0 && item % 2 === 0) product *= item;
  });
  return product;
}

export function prodyctOfOddNumberAndHigherThan15(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    if (item > 0 && item > 15 && item % 2 !== 0) product *= item;
  });
  return product;
}

export function productOfPerfectSquaresAndEvenNumbers(arr: readonly number[]): number {
  let product = 1;
  arr.map(item => {
    const n = Math.floor(Math.sqrt(item));
    if (item > 0 && item % 2 === 0 && n * n === item) product *= item;
  });
  return product;
}
