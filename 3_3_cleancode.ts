/* 
function c(x: number[]): number[] {
  const r = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      r.push(x[i] * 2);
    }
  }
  return r;
}
*/

function checkIsEven(number: number) {
  return (number % 2 == 0);
}

function multiplyOnlyEvenNumbersByTwo(listNumbers: number[]): number[] {
  const numbersEvenMultiplied: number[] = []

  for (let index = 0; index < listNumbers.length; index++) {
    if (checkIsEven(listNumbers[index])) {
      numbersEvenMultiplied.push(listNumbers[index] * 2);
    }
  }

  return numbersEvenMultiplied;
}
