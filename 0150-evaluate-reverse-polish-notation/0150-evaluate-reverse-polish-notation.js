/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const operators = ["+", "-", "*", "/"];

    for (let token of tokens) {
        if (operators.includes(token)) {
            let b = stack.pop();
            let a = stack.pop();

            if (token === "+") {
                stack.push(a + b);
            } else if (token === "-") {
                stack.push(a - b);
            } else if (token === "*") {
                stack.push(a * b);
            } else {
                stack.push(a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b));
            }
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack[0];
};