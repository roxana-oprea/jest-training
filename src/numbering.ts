export function getPositiveNumbers(arr: readonly number[]): number[] {
  return arr.filter(elem => elem > 0);
}

export function getNegativeNumbers(arr: readonly number[]): number[] {
  return arr.filter(elem => elem < 0);
}

export function getEvenNumbers(arr: readonly number[]): number[] {
  return arr.filter(elem => elem % 2 === 0);
}

export function getOddNumbers(arr: readonly number[]): number[] {
  return arr.filter(elem => elem % 2 !== 0);
}

export function getPerfectSquares(arr: readonly number[]): number[] {
  return arr.filter(elem => {
    const number = Math.floor(Math.sqrt(elem));
    return number * number === elem;
  });
}

export function getNumbersAtEvenPosition(arr: readonly number[]): number[] {
  return arr.filter((elem, index) => index % 2 === 0);
}

export function getElementsDivisibleBy3(arr: readonly number[]): number[] {
  return arr.filter(elem => elem % 3 === 0);
}

export function getElementsDivisibleBy5(arr: readonly number[]): number[] {
  return arr.filter(elem => elem % 5 === 3);
}

export function getElementsInInterval(arr: readonly number[]): number[] {
  return arr.filter(elem => elem >= -1 && elem <= 9);
}

export function getElementsPositiveAndDivisibleBy5(arr: readonly number[]): number[] {
  return arr.filter(elem => elem > 0 && elem % 5 === 0);
}

export function getElementsDevidedBy3And2(arr: readonly number[]): number[] {
  return arr.filter((elem, index) => index % 2 === 0 && elem % 2 === 0 && elem % 3 === 0);
}
