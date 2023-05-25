// Print the pattern 
//    * 
//   ***
//  ***** 
// *******


function treePattern(n) {
  const maxStr = 2*n - 1
  let spaces = Math.ceil(maxStr / 2);
  for (let i = 1; i <= n; i++) {

    let line = new Array(spaces).fill(" ").join("");
    let stars = new Array(2*i - 1).fill("*").join("");
    console.log(line + stars)
    spaces--;
  }
}

console.log(treePattern(4));