export const add = (a: number, b: number): string => {
  const result = a + b;
  return result.toString();
};

export const subtract = (a: number, b: number): string => {
  const result = a - b;
  return result.toString();
};

const findMax = (numbers: number[]): string => {
  const max = Math.max(...numbers);
  return max.toString();
};
