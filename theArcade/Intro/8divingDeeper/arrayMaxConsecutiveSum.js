/**Array Max Consecutive Sum
 * Given array of integers, find the maximal possible sum of some of its k consecutive elements.
 * 
 * Example
 * 
 * For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
 * arrayMaxConsecutiveSum(inputArray, k) = 8.
 * All possible sums of 2 consecutive elements are:
 * 
 * 2 + 3 = 5;
 * 3 + 5 = 8;
 * 5 + 1 = 6;
 * 1 + 6 = 7.
 * Thus, the answer is 8.
 * @param {number[]} inputArray 
 * @param {number} k 
 * @returns {number}
 */
function arrayMaxConsecutiveSum(inputArray, k) {

    let maxSum = 0;

    for (let i = 0; i < inputArray.length - (k - 1); i++) {
        let runningSum = 0;
        for (let j = 0; j < k; j++) {
            runningSum += inputArray[i + j];
        }
        if (runningSum > maxSum) {
            maxSum = runningSum;
        }
    }

    return maxSum;
}
console.log(arrayMaxConsecutiveSum([1, 3, 2, 4], 3));
