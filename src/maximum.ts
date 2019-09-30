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
