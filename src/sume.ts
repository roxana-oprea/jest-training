export function addsPositiveNumbers(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i];
  }
  return sum;
}

export function addsNegativeNumbers(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) sum += arr[i];
  }
  return sum;
}

export function addsEvenNumbers(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) sum += arr[i];
  }
  return sum;
}

export function addsOddNumbers(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) sum += arr[i];
  }
  return sum;
}

export function addsPerfectSquaresNumbers(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = Math.floor(Math.sqrt(arr[i]));
    if (arr[i] >= 0 && n * n === arr[i]) {
      sum += arr[i];
    }
  }
  return sum;
}

export function addsNumbersAtEvenPosition(arr: number[]): number {
  let sum = 0;
  for (let i = 2; i < arr.length; i++) {
    if (i % 2 === 0) sum += arr[i];
  }
  return sum;
}

export function addsNumbersDivisibleBy3(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) sum += arr[i];
  }
  return sum;
}

export function addsNumbersDividedBy5(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 3) sum += arr[i];
  }
  return sum;
}

export function sumOfSquares(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}

export function addsNumbersInInterval(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= -1 && arr[i] <= 9) sum += arr[i];
  }
  return sum;
}

export function addsPositiveNumbersAndDevidedBy5(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 5 === 0) sum += arr[i];
  }
  return sum;
}

export function addsNumbersDevidedBy3And2(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 3 === 0 && arr[i] % 2 === 0) sum += arr[i];
  }
  return sum;
}

export function addsOddNumberAndHigherThan15(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > 15) sum += arr[i];
  }
  return sum;
}

export function addPerfectSquaresAndEvenNumbers(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = Math.floor(Math.sqrt(arr[i]));
    if (arr[i] % 2 === 0 && n * n === arr[i]) {
      sum += arr[i];
    }
  }
  return sum;
}
