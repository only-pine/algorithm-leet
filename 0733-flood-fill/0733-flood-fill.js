/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color, prevColor = image[sr][sc]) {
    if (sr < 0 || sc < 0 || image.length <=  sr || image[sr][sc] !== prevColor || image[sr][sc] === color) {
        return image;
    }

    image[sr][sc] = color;

    floodFill(image, sr + 1, sc, color, prevColor);
    floodFill(image, sr - 1, sc, color, prevColor);
    floodFill(image, sr, sc + 1, color, prevColor);
    floodFill(image, sr, sc - 1, color, prevColor);

    return image;
};