/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let num = 0;
    let prefix = "";

    while (true) {
        let char = "";
        for (let index = 0; index < strs.length; index++) {
            if (strs[index][num] === undefined) return prefix;
            if (index === 0) {
                char = strs[index][num];
            }
            if (char !== strs[index][num]) {
                return prefix;
            }
            if (index === strs.length -1) {
                prefix += char;
            }
        }
        num++;
    }
    
};