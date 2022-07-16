function longestPalindrom(str) {
    const n = str.length
    let start = 0;
    let end = 0;
    let maxLen = 0;
    for (let i = 1; i < n; i++) {
        let low = i - 1;
        let high = i + 1
        while (str[low] == str[i] && low > 0) low--;
        while (str[high] == str[i] && high < n) high++;
        while (low > 0 && high < n && str[low] == str[high]) {
            low--;
            high++;
        }
        const curreL = high - low - 1;
        if (curreL > maxLen) {
            maxLen = curreL;
            start = low+1;
        }
    }

    return str.substr(start, maxLen);
}

console.log(longestPalindrom("bbarbbabbvfspolo"));