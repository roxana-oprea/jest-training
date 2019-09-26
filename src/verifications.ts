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

export function checkNumbersDivisibleBy4(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 !== 0) return false;
  }
  return true;
}

export function checkOddNumbersAndBiggerThan15(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] < 15) return false;
  }
  return true;
}

export function hasAtLeastOneEvenElement(arr: readonly number[]): boolean {
  return arr.some(elem => elem % 2 === 0);
}

export function hasAtLeastOneOddElement(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return false;
  }
  return true;
}

export function hasAtLeastOneElementDivisibleBy4(arr: readonly number[]): boolean {
  return arr.some(elem => elem % 4 === 0);
}

export function hasAtLeastOneOddNumberAndBiggerThan15(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > 15) return true;
  }
  return false;
}

export function checkArrayForAnyEvenNumber(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) return true;
  }
  return false;
}
