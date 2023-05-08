// Javascript program to count number of
// ways to reach n't stair when a
// person can climb 1, 2, ..m
// stairs at a time   
 
// Returns number of ways
// to reach s'th stair
function countWays(n , m)
{
    var res = Array(n + 1).fill(0);
    var temp = 0;
    res[0] = 1;

    for (i = 1; i <= n; i++) {
        var s = i - m - 1;
        var e = i - 1;
        if (s >= 0) {
            temp -= res[s];
        }
        temp += res[e];
        res[i] = temp;
    }
    return res[n];
}

console.log(countWays(4, 3));