const numbers = [-1, 2, -3, 4, 5];

function makeAllPositive(numbers: number[]): number[] {
  return numbers.map(
    num => (num >= 0 ? num : -(num))
  );
}

