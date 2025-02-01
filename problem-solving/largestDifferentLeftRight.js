// find the largest difference between two elements such that the element of lesser value must come before the greater element

const maxDifference = arr => {
  if (arr.length < 2) {
    throw new Error("Array must contain at least 2 elements");
  }
  
  const { maxDiff } = arr.slice(1).reduce(
    ({ min, maxDiff }, curr) => {
      const diff = curr - min;
      return {
        min: Math.min(min, curr),
        maxDiff: Math.max(maxDiff, diff)
      };
    },
    { min: arr[0], maxDiff: 0 }  // initialize maxDiff as 0
  );
  
  return maxDiff;
};

// Test example
const input = [5, 6, 8, 2, 9, 1];
console.log(maxDifference(input)); // Expected output: 7

