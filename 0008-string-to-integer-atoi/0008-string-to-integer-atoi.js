/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = "";
    const sign = ["-", "+"];
    const MAX = 2**31 - 1;
    const MIN = -(2**31);


    for (const char of s) {
        if (char === " " && result === "") continue;
        if (char === " " && result !== "") break;

        if (sign.includes(char) && result === "") {
            result += char;
        } else if (parseInt(char) >= 0 && parseInt(char) <= 9) {
            result += char;
        } else {
            break;
        }
    }

    if (result === "" || sign.includes(result)) {
        result = 0;
    } else if (parseInt(result) > MAX) {
        result = MAX;
    } else if (parseInt(result) < MIN) {
        result = MIN;
    } else {
        result = parseInt(result);
    }

    return result;
};