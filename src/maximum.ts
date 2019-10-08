export function getTheMaximumFromPozitiveNumbers(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < arr[i + 1]) {
      max = arr[i + 1];
    }
  }
  return max;
}
export function getTheMaximumFromNegativeNumbers(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && arr[i] > arr[i + 1]) {
      max = arr[i];
    }
  }
  return max;
}

export function getTheMaximumFromEvenNumbers(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > arr[i + 1]) {
      max = arr[i];
    }
  }
  return max;
}

export function getTheMaximumFromOddNumbers(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > max) max = arr[i];
  }
  return max;
}

export function getTheMaximumFromPerfectSquaresNumbers(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = Math.floor(Math.sqrt(arr[i]));
    if (n * n === arr[i] && arr[i] > max) max = arr[i];
  }
  return max;
}

export function getTheMaxFromNumbersOnEvenPosition(arr: readonly number[]): number {
  let max = 0;
  for (let i = 2; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] > max) max = arr[i];
  }
  return max;
}

export function getTheMAxFromNumbersDivisibleBy3(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] > max) max = arr[i];
  }
  return max;
}

export function getTheMaxFromNumbersDividedBy5(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 3 && arr[i] > max) max = arr[i];
  }
  return max;
}

export function getTheMaxOfSquares(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = Math.floor(Math.sqrt(arr[i]));
    if (n * n === arr[i] && arr[i] > max) max = arr[i];
  }
  return max;
}

export function getTheMaxOfNumbersBetweenInterval(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= -1 && arr[i] <= 9 && arr[i] > max) max = arr[i];
  }
  return max;
}

export function getTheMaxOfPosNumbersAndDivisibleBy5(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 5 === 0 && arr[i] > max) max = arr[i];
  }
  return max;
}

export function getTheMaxFromNumbersOnEvenPositionAndDevisibleBy3(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 3 === 0 && arr[i] > max) max = arr[i];
  }
  return max;
}

export function getTheMaximumFromOddNumbersAndBiggerThan15(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > 15 && arr[i] > max) max = arr[i];
  }
  return max;
}

export function getTheMaximumFromSquaresandEvenNumbers(arr: readonly number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const number = Math.floor(Math.sqrt(arr[i]));
    if (number * number === arr[i] && arr[i] % 2 === 0 && arr[i] > max) max = arr[i];
  }
  return max;
}
