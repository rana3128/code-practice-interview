

function capitalizeParts(inStr) {
    let started = false;
    let tmpStr = ""
    let ans = ""

    for (const char of inStr) {
        if (char == "_") {
            if (started) {
                ans += tmpStr.toUpperCase();
                tmpStr = "";
                started = false;
            } else {
                ans += tmpStr;
                tmpStr = "";
                started = true;
            }
        } else {
            tmpStr += char;
        }
    }
    if (tmpStr) ans += "_" + tmpStr;

    return ans;
}

console.log(capitalizeParts('_Hello_ he_llo world_ world _hello'))