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
