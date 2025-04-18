/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let index = digits.length - 1;

    digits[index] += 1;

    while (digits[index] === 10) {
        digits[index] = 0;

        if (index === 0) {
            digits.splice(0, 0, 1);
        } else {
            index -= 1;
            digits[index] += 1;
        }
    }

    return digits;
};