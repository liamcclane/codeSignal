/**
 * You are given an array of integers. 
 * On each move you are allowed to increase exactly one of its element by one. 
 * Find the minimal number of moves required to obtain a strictly 
 * increasing sequence from the input.
 * 
 * Example
 * For inputArray = [1, 1, 1], the output should be
 * arrayChange(inputArray) = 3.
 * @param inputArray : array of integers
 */
function arrayChange(inputArray) {
    let count = 0;
    for (let i=1; i<inputArray.length; i++) {
        let prev = inputArray[i-1];
        let curr = inputArray[i];
        if (prev === curr) {
            count ++;
            inputArray[i] ++;
        } else if (prev > curr) {
            // console.log(`(prev - curr) is ${(prev - curr)}`);
            // console.log(`prev is ${prev}`);
            // console.log(`curr is ${curr}`);
            count += (prev - curr) + 1;
            inputArray[i] = inputArray[i-1]+1;
        }
    }
    // console.log(inputArray);
    return count;
}
const ex = [-100, 0, -2, 0];
console.log(arrayChange(ex));
