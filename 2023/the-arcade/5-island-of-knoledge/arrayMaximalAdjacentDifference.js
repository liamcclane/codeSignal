/**
 * Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
 * @param {Array[number]} inputArray 
 */
function solution(inputArray) {

    let max = Math.abs(inputArray[0]-inputArray[1]), len = inputArray.length;
    for(let i = 1; i < len; i++) {
        if(max < Math.abs(inputArray[i-1]-inputArray[i])) {
            max = Math.abs(inputArray[i-1]-inputArray[i])
        }
    }
    return max;

}
