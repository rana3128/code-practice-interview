
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are
// horizontally or vertically neighboring. The same letter cell may not be used more than once.

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];

function findmatch(mat, pat, x, y, nrow, ncol, level) {
    let l = pat.length;
    if (level == l)
        return true;
    if (x < 0 || y < 0 || x >= nrow || y >= ncol)
        return false;
    if (mat[x][y] == pat[level]) {
        let temp = mat[x][y];
        mat[x][y] = '#';
        let res =
            findmatch(mat, pat, x - 1, y, nrow, ncol, level + 1) |
            findmatch(mat, pat, x + 1, y, nrow, ncol, level + 1) |
            findmatch(mat, pat, x, y - 1, nrow, ncol, level + 1) |
            findmatch(mat, pat, x, y + 1, nrow, ncol, level + 1);
        mat[x][y] = temp;
        return res;
    }
    else return false;
}

function checkMatch(mat, pat) {
    let nrow = mat.length;
    let ncol = mat[0].length;
    let l = pat.length;
    if (l > nrow * ncol)
        return false;

    for (let i = 0; i < nrow; i++) {
        for (let j = 0; j < ncol; j++) {
            if (mat[i][j] == pat[0])
                if (findmatch(mat, pat, i, j, nrow, ncol, 0))
                    return true;
        }
    }
    return false;
}

console.log(checkMatch(board, "ABCCED"));
console.log(checkMatch(board, "DCE"));
console.log(checkMatch(board, "DCEA"));
