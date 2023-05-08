// let arry = [9, 4, 5, 4, 6, 9, 4, 2, 1, 43, 6]

function febb(n) {
  const feb = [0, 1]

  for (let i = 1; i < n; i++) {
    feb.push(feb[i - 1] + feb[i])
  }
  return feb;
}

console.log(febb(20))