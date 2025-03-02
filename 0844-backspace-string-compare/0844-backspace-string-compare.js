/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sResult = Array.from(s).reduce((acc, cur) => {
        if (cur === "#") {
            return acc = acc.slice(0, -1);
        }
        return acc += cur;
    }, "");

    let tResult = Array.from(t).reduce((acc, cur) => {
        if (cur === "#") {
            return acc = acc.slice(0, -1);
        }
        return acc += cur;
    }, "");

    return sResult === tResult;
};