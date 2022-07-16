
function longestPalindrom(str) {
    const n = str.length
    if (!str) "";
    if (n == 1) return str;
    if (n == 2) return str[0] == str[1] ? str : str[0];
    let start = 0;
    let end = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        let low = i - 1 > 0 ? i - 1 : 0;
        let high = i + 1 < n ? i + 1 : n - 1;
        while (str[low] == str[i] && low >= 0) low--;
        while (str[high] == str[i] && high < n) high++;
        while (low >= 0 && high < n && str[low] == str[high]) {
            low--;
            high++;
        }
        const curreL = high - low - 1;
        if (curreL > maxLen) {
            maxLen = curreL;
            start = low + 1;
        }
    }

    return str.substr(start, maxLen);
}

console.log(longestPalindrom("ccc"));