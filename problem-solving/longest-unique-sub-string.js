// const str = "aababcbacd"; // output bacd
const str = "aabbabcedd"; // output abced

function largestUnique(str) {
    let start = 0;
    let lSubStr = "";
    let hmap = {};

    for (let i = 0; i <= str.length; i++) {
        if (hmap[str[i]] || !str[i]) {

            if (i - start > lSubStr.length) {
                lSubStr = str.substring(start, i);
            }

            while(start < i && str[i] != str[start]){
                delete hmap[str[start]];
                start++;
            }
            start++;
        } else {
            hmap[str[i]] = true;
        }
    }

    return lSubStr;
}

console.log(largestUnique(str));