/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let xStep = Math.abs(x - z);
    let yStep = Math.abs(y - z);

    if (xStep > yStep) {
        return 2;
    } else if (xStep < yStep) {
        return 1;
    } 

    return 0;
};