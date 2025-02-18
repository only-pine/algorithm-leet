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

    const array = Array.from(s).reverse();
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        let prevRoman = array[index - 1];
        let thisRoman = array[index];
        
        if (
            ((prevRoman === "V" || prevRoman === "X") && thisRoman === "I") ||
            ((prevRoman === "L" || prevRoman === "C") && thisRoman === "X") ||
            ((prevRoman === "D" || prevRoman === "M") && thisRoman === "C")
        ) {
            sum -= roman[thisRoman];
        } else {
            sum += roman[thisRoman];
        }
    }
    
    return sum;
};