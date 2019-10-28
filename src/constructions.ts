export function getNewArrPozitiveNumbers(x: readonly number[], y: readonly number[]): number[] {
  const newArr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] > 0) newArr.push(x[i]);
  }
  for (let i = 0; i < y.length; i++) {
    if (y[i] > 0) newArr.push(y[i]);
  }
  return newArr;
}

export function returnNumDivisibleBy3(x: readonly number[]): number[] {
  const newArr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 3 === 0) newArr.push(x[i]);
  }
  return newArr;
}

export function returnPositionsWithPositiveNum(x: readonly number[]): number[] {
  const newArr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] > 0) newArr.push(i);
  }
  return newArr;
}

export function returnPositionsOfNegativeNum(x: readonly number[]): number[] {
  const newArr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 0) newArr.push(i);
  }
  return newArr;
}

export function returnPositions(x: readonly number[], number: number): number[] {
  const newArr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] === number) newArr.push(i);
  }
  return newArr;
}
