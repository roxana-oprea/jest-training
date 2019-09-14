import { arrayExpression } from '@babel/types';

export function getAMPositiveNumbers(arr: readonly number[]): number {
  const newArr = arr.filter(elem => elem > 0);
  const total = newArr.reduce((acc, elem) => acc + elem, 0);
  return total / newArr.length;
}

export function getAMNegativeNumbers(arr: readonly number[]): number {
  const newArr = arr.filter(elem => elem < 0);
  const total = newArr.reduce((acc, elem) => acc + elem, 0);
  return total / newArr.length;
}

export function getAMEvenNumbers(arr: readonly number[]): number {
  const newArr = arr.filter(elem => elem % 2 === 0);
  const total = newArr.reduce((acc, elem) => acc + elem, 0);
  return total / newArr.length;
}

export function getAMOddNumbers(arr: readonly number[]): number {
  const newArr = arr.filter(elem => elem % 2 !== 0);
  const total = newArr.reduce((acc, elem) => acc + elem, 0);
  return total / newArr.length;
}

export function getAMPerfectSquaresNumbers(arr: readonly number[]): number {
  const newArr = arr.filter(elem => {
    const n = Math.floor(Math.sqrt(elem));
    return n * n === elem;
  });
  const total = newArr.reduce((acc, elem) => acc + elem, 0);
  return total / newArr.length;
}

export function getAMofNumbersAtEvenPosition(arr: readonly number[]): number {
  const newArr = arr.filter((elem, index) => index % 2 === 0);
  const total = newArr.reduce((acc, elem) => acc + elem, 0);
  return total / newArr.length;
}

export function getAMofNumbersDivisibleBy3(arr: readonly number[]): number {
  const newArr = arr.filter(elem => elem % 3 === 0);
  const total = newArr.reduce((acc, elem) => acc + elem);
  return total / newArr.length;
}

export function getAMofNumbersDividedBy5(arr: readonly number[]): number {
  const newArr = arr.filter(elem => elem % 5 === 3);
  const total = newArr.reduce((acc, elem) => acc + elem);
  return total / newArr.length;
}

export function getAMofSquares(arr: readonly number[]): number {
  const newArr = arr.map(elem => elem * elem);
  const total = newArr.reduce((acc, elem) => acc + elem);
  return total / newArr.length;
}

export function getAMofNumbersInInterval(arr: readonly number[]): number {
  const newArr = arr.filter(elem => elem >= -1 && elem <= 9);
  const total = newArr.reduce((acc, elem) => acc + elem);
  return total / newArr.length;
}

export function getAMofPositiveNumbersAndDevidedBy5(arr: readonly number[]): number {
  const newArr = arr.filter(elem => elem > 0 && elem % 5 === 0);
  const total = newArr.reduce((acc, elem) => acc + elem);
  return total / newArr.length;
}

export function getAMofNumbersDevidedBy3And2(arr: readonly number[]): number {
  const newArr = arr.filter((elem, index) => index % 2 === 0 && elem % 6 === 0);
  const total = newArr.reduce((acc, elem) => acc + elem);
  return total / newArr.length;
}
