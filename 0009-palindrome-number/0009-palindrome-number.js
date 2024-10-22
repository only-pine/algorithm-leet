/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reverseStr = Array.from(x.toString()).reverse();
    return x === Number(reverseStr.join(''));
};