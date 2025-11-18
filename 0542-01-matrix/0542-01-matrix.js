/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const hor = mat.length;
    const ver = mat[0].length;
    const distance = Array.from({ length: hor }, () => Array(ver).fill(Infinity));
    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [];

    for (let i = 0; i < hor; i++) {
        for (let j = 0; j < ver; j++) {
            if (mat[i][j] === 0) {
                distance[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    while (queue.length > 0) {
        const [row, col] = queue.shift();

        for (const [dl, dr] of direction) {
            const new_row = row + dl;
            const new_col = col + dr;

            if (new_row >= 0 && new_row < hor && new_col >= 0 && new_col < ver && distance[new_row][new_col] === Infinity) {
                distance[new_row][new_col] = distance[row][col] + 1;
                queue.push([new_row, new_col]);
            }
        }
    }

    return distance;
};