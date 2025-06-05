/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let char = "";

    while (columnNumber > 0) {
        let share = Math.floor(columnNumber / 26);
        let rest = columnNumber % 26;

        if (rest === 0) {
            rest = 26;
            share -= 1;
        }

        char += String.fromCharCode(rest + 64);
        columnNumber = share;
    }


    return char.split("").reverse().join("");
};
