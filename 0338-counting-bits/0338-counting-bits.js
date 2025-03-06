/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = new Array(n+1);

    for (let index = 0; index < ans.length; index++) {
        let num = index.toString(2);       

        ans[index] = Array.from(num).reduce((acc, cur) => {
            if (cur === "1") return acc + 1;
            return acc;
        }, 0);
    }

    return ans;
};