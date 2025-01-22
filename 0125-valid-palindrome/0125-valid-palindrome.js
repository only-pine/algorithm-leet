/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let phrase = s.toLowerCase().trim();
    let start = 0, end = phrase.length - 1;

    var checkAlphanumericChar = function(word) {
        if((
            word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) || 
            (Number(word) >= 0 && Number(word) <= 9
            ) && word != " "
        ) {
            return true;
        } else {
            return false;
        }
    }

    while (start < phrase.length) {
        if (checkAlphanumericChar(phrase[start])) {
            if (checkAlphanumericChar(phrase[end])) {
                if (phrase[start] === phrase[end]) {
                    start++;
                    end--;
                } else {
                    return false;
                }
            } else {
                end--;
            }
        } else {
            start++;
        }
    }

    return true;
};

/*
    1. 전달받은 문구를 소문자로 변환시킨다.
    2. 숫자를 담는 변수 2개를 선언하고, 하나는 0, 나머지 하나는 문구의 길이 - 1을 할당한다.
    3. 반복문을 통해서 문구의 앞뒤가 동일한 알파벳인지 확인한다.
*/