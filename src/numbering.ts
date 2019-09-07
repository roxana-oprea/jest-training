export function getPositiveNumbers(arr: readonly number[]): number[] {
  return arr.filter(elem => elem > 0);
}

export function getNegativeNumbers(arr: readonly number[]): number[] {
  return arr.filter(elem => elem < 0);
}
