export function getFirstEvenNumber(arr: readonly number[]): number | undefined {
  return arr.find(elem => elem % 2 === 0);
}

export function getFirstOddNumber(arr: readonly number[]): number | undefined {
  return arr.find(elem => elem % 2 !== 0);
}

export function getFirstNumberDivisibleBy4(arr: readonly number[]): number | undefined {
  return arr.find(elem => elem % 4 === 0);
}

export function getFirstOddNumberAndGraterThan15(arr: readonly number[]): number | undefined {
  return arr.find(elem => elem % 2 !== 0 && elem >= 15);
}

export function getLastEvenNumber(arr: readonly number[]): number | undefined {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) return arr[i];
  }
}

export function getLastOddNumber(arr: readonly number[]): number | undefined {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 !== 0) return arr[i];
  }
}

export function getLastNumberDivisibleBy4(arr: readonly number[]): number | undefined {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 4 === 0) return arr[i];
  }
}

export function getLastOddNumberAndGraterThan15(arr: readonly number[]): number | undefined {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 !== 0 && arr[i] >= 15) return arr[i];
  }
}

export function getTheIndexOfNthOccurrenceEvenNumber(
  arr: readonly number[],
  p: number,
): number | undefined {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      counter += 1;

      if (counter === p) {
        return i;
      }
    }
  }
  return -1;
}

export function getTheIndexOfNthOccurrenceOddNumber(
  arr: readonly number[],
  p: number,
): number | undefined {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      counter += 1;

      if (counter === p) {
        return i;
      }
    }
  }
  return -1;
}

export function getTheIndexOFNthOccurancedivisibleBy4(
  arr: readonly number[],
  p: number,
): number | undefined {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 === 0) {
      counter++;

      if (counter === p) {
        return i;
      }
    }
  }
  return -1;
}

export function getTheIndexOfNthOccuranceOddNumberAndGraterThan15(
  arr: readonly number[],
  p: number,
): number | undefined {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 15 && arr[i] % 2 !== 0) {
      counter++;

      if (counter === p) {
        return i;
      }
    }
  }
  return -1;
}
