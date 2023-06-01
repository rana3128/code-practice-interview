const input = [[1, 2], [2, 4], [2, 5], [7, 8], [1, 3], [10, 15]]

function mergeInterval(arr) {
  arr.sort((a, b) => a[0] - b[0])

  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const last = result.pop();
    if (last) {
      const current = arr[i];
      if (last[1] >= current[0]) {
        const endOfInterval = last[1] > current[1] ? last[1] : current[1]
        result.push([last[0], endOfInterval])
      } else {
        result.push(last)
        result.push(current)
      }
    }
  }

  return result;
}

console.log(mergeInterval(input));
