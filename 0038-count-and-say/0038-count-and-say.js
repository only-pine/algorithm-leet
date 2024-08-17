/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let result = '';    //이전 결과값을 저장하는 변수

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            result = "1";
            continue;
        }

        let semiResult = '';

        for (let j = 0; j < result.length; j++) {
            let index = j;
            while (result[j] === result[index + 1]) {
                index++;
            }
            semiResult += (index - j + 1).toString() + result[j]
            j = index;
        }

        result = semiResult;
    }

    return result;
};