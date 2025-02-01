/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let index = 0;
    let sum = BigInt(a) + BigInt(b);
    const array = Array.from(sum.toString()).reverse();
    console.log(sum);

    while (array[index] !== undefined) {
        if (array[index] >= "2") {
            array[index] = array[index] === "2" ? "0" : "1";
            array[index + 1]  = String(BigInt(array[index + 1] ?? 0) + BigInt(1));
        }

        index++;
    }

    return array.reverse().join("");
};