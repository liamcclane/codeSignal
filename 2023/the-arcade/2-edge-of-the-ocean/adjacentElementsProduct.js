/**
 * Given an array of integers, 
 * find the pair of adjacent elements 
 * that has the largest product and return that product.
 * @param {Array[Number]} inputArray 
 * @returns {number}
 */
function solution(inputArray) {
    let max = inputArray[0] * inputArray[1], len = inputArray.length;
    for( let i = 1; i < len - 1; i++ ) {
        if(inputArray[i] * inputArray[i+1] > max) {
            max = inputArray[i] * inputArray[i+1];
        }
    }
    return max;
}
