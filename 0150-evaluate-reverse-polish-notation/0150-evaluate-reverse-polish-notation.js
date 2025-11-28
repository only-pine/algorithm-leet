/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let index = 0;
    const operators = ["+", "-", "*", "/"];

    while (tokens[index]) {
        if (operators.includes(tokens[index])) {
            let answer = 0;
            let operand_1 = Number(tokens[index - 2]);
            let operand_2 = Number(tokens[index - 1]);

            switch (tokens[index]) {
                case "+" :
                    answer = operand_1 + operand_2;
                    break;
                case "-" :
                    answer = operand_1 - operand_2;
                    break;
                case "*" :
                    answer = operand_1 * operand_2;
                    break;
                case "/" :
                    answer = operand_1 / operand_2 > 0 ? Math.floor(operand_1 / operand_2) : Math.ceil(operand_1 / operand_2);
                    break;
            }

            tokens.splice(index - 2, 3, answer);
            index -= 1;
        } else {
            index += 1;
        }
    }

    return Number(tokens[0]);
};