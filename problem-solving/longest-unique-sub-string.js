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



// Second approach
// Input: s = "abcabcbb" Output: 3
// Input: s = "pwwkew" Output: 3
// Input: s = "bbbbb" Output: 1

const input = "bbbbb"

function LargestNonRepeted(str){
  let start = 0;
  let end = 1;
  let tmpStr = str[0];
  let result = ""

  while(start < end){

    if(tmpStr.includes(str[end])){
      
      if( result.length < tmpStr.length ){
        result = tmpStr;
      }

      while( str[start] !== str[end] ) {
        start++;
      }
      start++;

      tmpStr = str.substring(start, end)
    } else {
      tmpStr += str[end]
      end++;
    }
  }

  return result.length;

}

console.log(LargestNonRepeted(input));
