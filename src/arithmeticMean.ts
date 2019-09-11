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
