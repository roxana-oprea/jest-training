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

export function checkArrayForAnyOddNumber(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return true;
  }
  return false;
}

export function checkArrayForAnyNumberDivisibleBy4(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 === 0) return false;
  }
  return true;
}

export function checkArrayForAnyOddNumberAndBiggerThan15(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > 15) return false;
  }
  return true;
}

export function ascendingSort(arr: readonly number[]): number[] {
  const cloneArr = [...arr];
  const sortedArray = cloneArr.sort((a, b) => a - b);
  return sortedArray;
}

export function descendingSort(arr: readonly number[]): number[] {
  const cloneArr = [...arr];
  const sortedArray = cloneArr.sort((a, b) => b - a);
  return sortedArray;
}

export function constantArray(arr: readonly number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) return false;
  }
  return true;
}

export function equalLengthOfArrays(arr1: readonly number[], arr2: readonly number[]): boolean {
  if (arr1.length === arr2.length) {
    return true;
  } else {
    return false;
  }
}

export function checksFirst3Elements(arr1: readonly number[], arr2: readonly number[]): boolean {
  for (let i = 0; i < 3; i++) {
    if (arr1[i] === arr2[i]) return true;
  }
  return false;
}

export function checksFirstAndLast3Elements(
  arr1: readonly number[],
  arr2: readonly number[],
): boolean {
  for (let i = 0; i < 3; i++) {
    for (let j = arr2.length - 1; j >= arr2.length - 3; j--) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}
