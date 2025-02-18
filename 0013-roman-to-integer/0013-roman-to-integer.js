/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    let sum = 0;
    for (let index = 0; index < s.length; index++) {
        if (roman[s[index]] < roman[s[index + 1]]) {
            sum -= roman[s[index]];
        } else {
            sum += roman[s[index]];
        }
    }
    
    return sum;
};