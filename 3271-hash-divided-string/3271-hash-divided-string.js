/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    let sum = 0;
    let result = "";

    for (let index = 0; index <= s.length; index++) {
        if ((index / k > 0 && index % k === 0) || index === s.length) {
            result += String.fromCharCode(sum % 26 + 97);
            sum = 0;
        }

        sum += s.charCodeAt(index) - 97;
    }

    return result;
};

/*
    const hashedChar = ['a', 'b', 'c', 'd', 
                        'e', 'f', 'g', 'h', 
                        'i', 'j', 'k', 'l', 
                        'm', 'n', 'o', 'p', 
                        'q', 'r', 's', 't', 
                        'u', 'v', 'w', 'x', 
                        'y', 'z'];

    const array = Array.from(s);
    let result = [];
    let resultStr = "";

    while (array.length > 0) {
        let sum = 0;
        const copiedArray = array.splice(0, k);

        copiedArray.forEach((arr) => {
            sum += hashedChar.indexOf(arr);
        })

        result.push(sum % 26);
    }

    result.forEach((res) => {
        resultStr += hashedChar[res];
    })

    return resultStr;
*/