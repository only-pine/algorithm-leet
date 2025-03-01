/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0;
    let code = s.charCodeAt(0);

    for (let index = 0; index < s.length; index++) {
        sum += Math.abs(code - s.charCodeAt(index));
        code = s.charCodeAt(index);
    }

    return sum;
};