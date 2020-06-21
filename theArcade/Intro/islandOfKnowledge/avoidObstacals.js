/**Avoid Obstacles
 * You are given an array of integers representing coordinates of obstacles
 * situated on a straight line.
 * 
 * Assume that you are jumping from the point with coordinate 0 to the right. 
 * You are allowed only to make jumps of the same length represented by some integer.
 * 
 * Find the minimal length of the jump enough to avoid all the obstacles.
 * 
 * Example
 * For inputArray = [ 5, 3, 5, 7, 9], the output should be 4
 * b/c : 0 -> 4 -> 8 -> ... 
 * we have to jump in steps of two, where we over come the greatest number in the 
 * array and didn't step on any of the numbers in the given array
 */
/**Avoid Obstacles 
 * 
 * @param {number[]} inputArray is a list of numbers your cannot touch
 * @returns {number} the largest consistent step you have to take to avoid all the numbers
 */
function avoidObstacles(inputArray) {
    let stepSize = 1, b = true, max = Math.max(...inputArray);
    while (stepSize <= max) {
        for (let i = 0; i <= max + stepSize; i += stepSize) {
            if (inputArray.includes(i)) { break; }
            if (i > max) { return stepSize; }
        }
        stepSize++;
    }
    return stepSize;
}


console.log(avoidObstacles([5, 3, 6, 7, 9]));
