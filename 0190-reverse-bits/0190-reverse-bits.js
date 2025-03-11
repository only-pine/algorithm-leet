/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const array = Array.from(n.toString(2)).reverse();

    return parseInt(array.join("").padEnd(32, "0"), 2);
};