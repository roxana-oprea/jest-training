export function checkAllEvenNumbers(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) return false;
  }
  return true;
}

export function checkAllOddNumbers(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return false;
  }
  return true;
}
