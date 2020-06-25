/**Absolute Values Sums Minimization 
 * 
 * @param {number[]} a 
 * @returns {number}
 */
function absoluteValuesSumMinimization(a) {

    const helper = (arr, ind) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += Math.abs(arr[i] - arr[ind]);
        }
        return sum;
    }

    let runningSums = [];

    for (let i = 0; i < a.length; i++) {
        runningSums.push(helper(a, i));
    }

    return a[runningSums.indexOf(Math.min(...runningSums))];

}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([1, 1, 1, 5, 7, 8]));
console.log(absoluteValuesSumMinimization(
    [-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
));
