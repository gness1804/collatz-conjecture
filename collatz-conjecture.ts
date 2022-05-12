export function steps(count: number): number {
  let numberOfSteps = 0;
  let leftoverNumber = count;

  if (count < 0) throw new Error('Only positive numbers are allowed');
  if (count === 0) throw new Error('Only positive numbers are allowed');
  if (count === 1) return 0;

  while (leftoverNumber !== 1) {
    numberOfSteps++;
    const isEven = leftoverNumber % 2 == 0;
    if (isEven) {
      leftoverNumber = leftoverNumber / 2;
    } else {
      leftoverNumber = (3 * leftoverNumber) + 1;
    }
  }

  return numberOfSteps;
}
