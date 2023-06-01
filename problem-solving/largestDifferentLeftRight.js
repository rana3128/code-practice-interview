// find the largest difference between two elements such that the element of lesser value must come before the greater element

const input = [5, 6, 8, 1, 9];

function largestDiff(arr) {
  const sorted = [...arr].sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const minPos = arr.indexOf(sorted[left])
    const maxPos = arr.indexOf(sorted[right])
    if (minPos < maxPos) {
      return sorted[right] - sorted[left];
    }
    else {
      if (sorted[left + 1] - sorted[left] > sorted[right] - sorted[right - 1]) {
        right--;
      } else {
        left++
      }
    }
  }

}

console.log(largestDiff(input));

