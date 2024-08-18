/**
 * @param {number} n
 * @return {number}
 */
 /*
 ugly number는 주요 약수가 2, 3, 5로 제한된 0보다 큰 정수이다.
 정수 n이 주어지면, n번째 ugly number를 반환한다.

 1. 1부터 차례대로 2, 3, 5로 나눌 수 있는지 확인한다.
 2. 위의 숫자로 나눌 수 있다면 배열에 저장한다.
 3. 배열의 길이가 정수 n과 동일한지 확인한다.
    3.1 배열의 길이가 n이라면, 배열의 마지막 요소를 반환한다.
    3.2 배열의 길이가 n이 아니라면, 위의 순서를 반복한다.
 */
var nthUglyNumber = function(n) {
    const result = [1];
    let idx2 = 0, idx3 = 0, idx5 = 0;

    while(result.length < n){
        let num2 = result[idx2] * 2,
            num3 = result[idx3] * 3,
            num5 = result[idx5] * 5;
        
        let number = Math.min(num2, num3, num5);

        if(!result.includes(number)){
            result.push(number);
        }

        if(number === num2){
            idx2++;
        } else if(number === num3){
            idx3++;
        } else if(number === num5){
            idx5++;
        }
    }

    return result[n- 1];
};