const randomValues = ['a', 'b', 'a', 'c', 'b', 'a'];

const occurrences = randomValues.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(occurrences); // Output: { a: 3, b: 2, c: 1 }
