/**
 * You are given an array of integers. 
 * On each move you are allowed to increase exactly one of its element by one. 
 * Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
 * @param {Array[number]} inputArray 
 * @returns 
 */
function solution(inputArray) {

    let count = 0, len = inputArray.length;
    for(let i = 1; i < len; i++) {
        if(inputArray[i-1] >= inputArray[i]) {
            let diff = (inputArray[i-1] - inputArray[i]) + 1;
            count += diff;
            inputArray[i] = 1 + inputArray[i - 1];
        }
    }
    return count;

}
