/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const directions = [[1,0], [0,1], [-1, 0], [0, -1]];
    let count = 0;
    const row = grid.length;
    const column = grid[0].length;
    const visited = Array.from(new Array(row), () => new Array(column).fill(false));
    

    function dfs (r, c) {
        if (r < 0 || r >= row || c < 0 || c >= column || grid[r][c] === '0' || visited[r][c]) {
            return;
        }

        visited[r][c] = true;

        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (grid[r][c] === '1' && !visited[r][c]) {
                dfs(r, c);
                count++;
            }
        }
    }

    return count;
};