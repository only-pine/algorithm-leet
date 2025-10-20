/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    let result = true;
    let base = 2;

    while (result && base <= n - 2) {
        let word = n.toString(base);
        let length = word.length;

        let left = length % 2 ? Math.floor(length / 2) - 1 : (length / 2) - 1;
        let right = length % 2 ? left + 2 : left + 1;

        while (result && left >= 0 && right < length) {
            if (word[left] === word[right]) {
                left--;
                right++;
            } else {
                result = false;
            }
        }

        base++;
    }
    
    return result;
};