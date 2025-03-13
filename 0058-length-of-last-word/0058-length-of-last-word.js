/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let string = s.trim();
    let index = string.lastIndexOf(" ");

    return string.length - (index + 1);
};