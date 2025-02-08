const add = (a: number, b: number): string => {
  const result = a + b;
  return result.toString();
};

const result = add(1, 2) + 0;
console.log(result, "type of result: ", typeof result);
