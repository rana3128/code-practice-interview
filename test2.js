//                   9
//                 8 9 8
//               7 8 9 8 7
//             6 7 8 9 8 7 6
//           5 6 7 8 9 8 7 6 5
//         4 5 6 7 8 9 8 7 6 5 4
//       3 4 5 6 7 8 9 8 7 6 5 4 3
//     2 3 4 5 6 7 8 9 8 7 6 5 4 3 2
//   1 2 3 4 5 6 7 8 9 8 7 6 5 4 3 2 1

const pLeg = 9;
for (let i = pLeg; i > 0; i--) {
  let space = Math.floor(i / 2 - 1);
  let line = "";
  for (let s = 0; s < space; s++) {
    line += " ";
  }
  for (let n = i; n <= i; n++) {
    line += n;
  }
  for (let n = pLeg; n >= i; n--) {
    line += n;
  }

  console.log(line);
}
