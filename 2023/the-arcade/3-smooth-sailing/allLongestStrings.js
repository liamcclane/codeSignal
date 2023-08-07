/**
 * Given an array of strings, return another array containing all of its longest strings.
 * @param {Array[String]} inputArray 
 * @returns {Array[String]}
 */
function solution(inputArray) {
    let arr = [], maxLen = 0;

    for(let i = 0; i < inputArray.length; i++) {
        if(maxLen < inputArray[i].length) {
            maxLen = inputArray[i].length;
            arr = [];
        }
        if(maxLen == inputArray[i].length) {
            arr.push(inputArray[i]);
        }
    }

    return arr;
}
