/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    let result = true;
    let base = 2;

    while (result && base <= n - 2) {
        let word = n.toString(base);

        let left, right;
        if (word.length % 2 === 0) {
            left = (word.length / 2) - 1;
            right = left + 1;
        } else {
            left = Math.floor(word.length / 2) - 1;
            right = left + 2;
        }

        while (result && left >= 0 && right < word.length) {
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