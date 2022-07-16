const array = [54, 548, 546, 60];
function largestArrrange(arr) {
    return arr.sort((X, Y) => (Number("" + Y + X) - Number("" + X + Y))).join("");
}
console.log(largestArrrange(array));