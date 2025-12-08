/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const emailToName = new Map();
    const emailToEmail = new Map();

    for (const account of accounts) {
        const name = account[0];

        for (let i = 1; i < account.length; i++) {
            emailToName.set(account[i], name);

            if (!emailToEmail.has(account[i])) {
                emailToEmail.set(account[i], []);
            }

            if (i > 1) {
                emailToEmail.get(account[i]).push(account[i - 1]);
                emailToEmail.get(account[i - 1]).push(account[i]);
            }
        }
    }

    const visited = new Set();
    const result = [];

    for (const email of emailToEmail.keys()) {
        if (visited.has(email)) continue;

        const stack = [email];
        const list = [];

        while (stack.length) {
            let node = stack.pop();
            if (visited.has(node)) continue;

            visited.add(node);
            list.push(node);

            for (const subEmail of emailToEmail.get(node)) {
                if (!visited.has(subEmail)) stack.push(subEmail);
            }
        }

        list.sort();
        result.push([emailToName.get(email), ...list]);
    }
    
    return result;
};