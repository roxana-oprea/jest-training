import { numberLiteralTypeAnnotation } from '@babel/types';

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
