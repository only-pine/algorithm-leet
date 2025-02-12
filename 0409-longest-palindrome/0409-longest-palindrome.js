/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map();

    for (const char of s) {
        map.set(char, map.get(char) ? map.get(char) + 1 : 1);
    }

    let maxOdd = 0;
    let length = 0;
    for (const count of map.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            maxOdd = Math.max(maxOdd, count);
            length += count - 1;
        }
    }

    return maxOdd > 0 ? length + 1 : length;
};