// re-arrange number such a way so it will me max
//  [54, 548, 546, 60] => 6054854654

const array = [54, 548, 546, 60];
function largestArrrange(arr) {
    return arr.sort((X, Y) => (Number("" + Y + X) - Number("" + X + Y))).join("");
}
console.log(largestArrrange(array));