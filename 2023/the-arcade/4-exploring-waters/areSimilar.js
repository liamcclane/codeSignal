/**
 * Two arrays are called similar if one can be obtained from another by swapping at most one 
 * pair of elements in one of the arrays.
 * 
 * Given two arrays a and b, check whether they are similar.
 * @param {Array[Number]} a 
 * @param {Array[Number]} b 
 * @returns {boolean}
 */
function areSimilar(a, b) {
    let count = 0, prev = inputArray[0], len = inputArray.length;
    for(let i = 1; i < len; i++) {
        if(inputArray[i-1] >= inputArray[i]) {
            let diff = (inputArray[i-1] - inputArray[i]) + 1;
            count += diff;
            inputArray[i] = 1 + inputArray[i - 1];
        }
    }
    return count;
}