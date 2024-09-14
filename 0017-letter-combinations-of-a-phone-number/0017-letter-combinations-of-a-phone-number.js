/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phoneNumberArray = {
        2 : ["a", "b", "c"],
        3 : ["d", "e", "f"],
        4 : ["g", "h", "i"],
        5 : ["j", "k", "l"],
        6 : ["m", "n", "o"],
        7 : ["p", "q", "r", "s"],
        8 : ["t", "u", "v"],
        9 : ["w", "x", "y", "z"]
    }

    const digitsArray = Array.from(digits);
    const combinationArray = new Array();
    let repeatedCount = 1;

    if (digits.length === 0) {
        return combinationArray;
    }

    if (digits.length > 1) {
        repeatedCount = digitsArray.reduce((acc,cur, index) => {
            if (index === 0) {
                return 1;
            } else {
                return acc * (phoneNumberArray[digitsArray[index]].length);
            }
        }, 1);
    }

    for (let index = 0; index < phoneNumberArray[digitsArray[0]].length; index++) {
        let number = phoneNumberArray[digitsArray[0]][index];

        for (let subIndex = 0; subIndex < repeatedCount; subIndex++) {
            combinationArray.push(number);
        }
    }

    if (digits.length > 1) {
        for (let index = 1; index < digitsArray.length; index++) {
            let count = 0;

            repeatedCount = digitsArray.reduce((acc,cur, idx) => {
                if (idx <= index) {
                    return 1;
                } else {
                    return acc * (phoneNumberArray[digitsArray[idx]].length);
                }
            }, 1);

            while (count !== combinationArray.length) {
              phoneNumberArray[digitsArray[index]].forEach((num) => {
                for (let subIndex = 0; subIndex < repeatedCount; subIndex++) {
                      combinationArray[count] = combinationArray[count].concat(num);
                      count++;
                }              
              })
            }
        }
    }
    
    return combinationArray;
};