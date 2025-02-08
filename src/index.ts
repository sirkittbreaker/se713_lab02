const add = (a: number, b: number): string => {
  const result = a + b;
  return result.toString();
};

const result = add(1, 2) + 0;
console.log(result, "type of result: ", typeof result);

const findMax = (numbers: number[]): string => {
  const max = Math.max(...numbers);
  return max.toString();
};

const numbers = [29, 11, 3, 55, 34];
const maxNumber = findMax(numbers);
console.log(maxNumber, "type of maxNumber: ", typeof maxNumber);
