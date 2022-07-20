// search value index in sorted + rotated array in O(log n)
// [4, 5, 6, 7, 8, 1, 2, 3] => 2 => 6

function search(arr, low, high, x) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] >= arr[low]) {
        if (arr[low] <= x && x <= arr[mid]) {
            return search(arr, low, mid - 1, x);
        }
        return search(arr, mid + 1, high, x);
    }

    if (arr[mid] <= x && x <= arr[high]) {
        return search(arr, mid + 1, high, x);
    }
    return search(arr, low, mid - 1, x);
}

console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 0, 7, 2))