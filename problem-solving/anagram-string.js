// Given an array of strings, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

function ana(arr) {
    const anaAns = [];
    let remmain = arr;
    while (remmain.length > 0) {
        const tmpArr = [];
        const cAnas = [remmain[0]];
        const currentStr = remmain[0];
        const hmap = {}
        for (let char of currentStr) {
            if (hmap[char]) {
                hmap[char] += 1;
            } else {
                hmap[char] = 1;
            }
        }
        for (let i = 1; i < remmain.length; i++) {
            const hmapT = {}
            const currentStrT = remmain[i];
            for (let char of currentStrT) {
                if (hmapT[char]) {
                    hmapT[char] += 1;
                } else {
                    hmapT[char] = 1;
                }
            }
            let isAna = true;
            Object.keys(hmap).forEach(char => {
                if (hmap[char] != hmapT[char]) {
                    isAna = false;
                }
            });
            if (isAna) {
                cAnas.push(currentStrT);
            } else {
                tmpArr.push(currentStrT);
            }
        }
        remmain = tmpArr;
        anaAns.push(cAnas);
    }
    return anaAns;
}

console.log(ana(input));