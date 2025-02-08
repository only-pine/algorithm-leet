/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const array = [];
    
    for (let index = 0 ; index < s.length ; index++) {
        let char = s.charAt(index);
        switch(char) {
            case '(': array.push(')');
                break;
            case '[': array.push(']');
                break;
            case '{': array.push('}');
                break;
            default:
                if (char !== array.pop()) {
                    return false;
                }
        }
    }
    
    return array.length === 0;
};