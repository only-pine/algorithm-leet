/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const row = board.length;
    const column = board[0].length;

    function dfs(r, c) {
        if (r < 0 || r >= row || c < 0 || c >= column || board[r][c] !== 'O') return;

        board[r][c] = 'B';

        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    for (let r = 0; r < row; r++) {
        dfs(r, 0);
        dfs(r, column - 1);
    }

    for (let c = 0; c < column; c++) {
        dfs(0, c);
        dfs(row - 1, c);
    }

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (board[r][c] === 'B') board[r][c] = 'O';
            else if (board[r][c] === 'O') board[r][c] = 'X';
        }
    }
}; 