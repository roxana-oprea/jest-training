export function getTheMinimumFromPozitiveNumbers(arr: readonly number[]): number {
  let min: number | undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (min === undefined) {
        min = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min as number;
}

export function getTheMinimumFromNegativeNumbers(arr: readonly number[]): number {
  let min: number | undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (min === undefined) {
        min = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min as number;
}

export function getTheMinimumFromEvenNumbers(arr: readonly number[]): number {
  let min: number | undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (min === undefined) {
        min = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min as number;
}

export function getTheMinimumFromOddNumbers(arr: readonly number[]): number {
  let min: number | undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      if (min === undefined) {
        min = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min as number;
}

export function getTheMinimumFromPerfectSquaresNumbers(arr: readonly number[]): number {
  let min: number | undefined;
  for (let i = 0; i < arr.length; i++) {
    const num = Math.floor(Math.sqrt(arr[i]));
    if (num * num === arr[i]) {
      if (min === undefined) {
        min = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min as number;
}

export function getTheMinFromNumbersOnEvenPosition(arr: readonly number[]): number {
  let min: number | undefined;
  for (let i = 2; i < arr.length; i++) {
    if (i % 2 === 0) {
      if (min === undefined) {
        min = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min as number;
}

export function getTheMinFromNumbersDivisibleBy3(arr: readonly number[]): number {
  let min: number | undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      if (min === undefined) {
        min = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min as number;
}

export function getTheMinFromNumbersDividedBy5(arr: readonly number[]): number {
  let min: number | undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 3) {
      if (min === undefined) {
        min = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min as number;
}

export function getTheMinOfSquares(arr: readonly number[]): number {
  let min: number | undefined;
  for (let i = 0; i < arr.length; i++) {
    const num = Math.floor(Math.sqrt(arr[i]));
    if (num * num === arr[i]) {
      if (min === undefined) {
        min = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min as number;
}
