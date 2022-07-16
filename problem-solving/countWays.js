const hash = {}
function countWays(n) {
    if (n < 0) return 0;
    else if (n == 0) return 1;
    else if (hash[n]) return hash[n];
    else {
        return countWays(n - 1) + countWays(n - 2) + countWays(n - 3)
    }
}

console.log(countWays(4));