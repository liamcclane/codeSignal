/**
 * Given an array of integers, find the maximal
 * absolute difference between any two of its adjacent elements.
 * @param {number[]} inputArray 
 */
function arrayMaximalAdjacentDifference(inputArray) {
    let maxDif = 0;
    for(let i = 1; i<inputArray.length; i++){
        let dif = Math.abs(inputArray[i] - inputArray[i-1]);
        if(maxDif < dif){
            maxDif = dif;
        }
    }
    return maxDif;
}
