/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = Number(Array.from(Math.abs(x).toString()).reverse().join(""));
    num = x > 0 ? num : -num;

    if (num <= -(2**31) || num >= 2**31 - 1) {
        return 0;
    }

    return num;
};