/**
 * @param {string} s
 * @return {boolean}
 */
 /*
- 빈칸과 알파벳이 아닌 문자들은 제거
 */
var isPalindrome = function(s) {
    const str = [];
    for (const element of s.toLowerCase()) {
        if ((element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122)
           || parseInt(element) >= 0) {
            str.push(element);
        }
    }

    const reverseStr = str.slice().reverse();
    
    let index = 0;
    while (str.length >= index) {
        if (str[index] !== reverseStr[index]) {
            return false;
        }

        index += 1;
    }
    
    return true;
};