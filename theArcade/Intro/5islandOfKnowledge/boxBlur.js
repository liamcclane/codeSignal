/**Box Blur
 * Last night you partied a little too hard. Now there's a black and white photo 
 * of you that's about to go viral! You can't let this ruin your reputation, 
 * so you want to apply the box blur algorithm to the photo to hide its content.
 * 
 * The pixels in the input image are represented as integers. 
 * The algorithm distorts the input image in the following way: 
 * Every pixel x in the output image has a value equal to the average 
 * value of the pixel values from the 3 × 3 square that has its center 
 * at x, including x itself. All the pixels on the border 
 * of x are then removed.
 * 
 * Return the blurred image as an integer, with the fractions rounded down.
 * 
 * Example 1:
 * let ex1 = [
 *     [1, 1, 1],
 *     [1, 7, 1],
 *     [1, 1, 1]
 * ]
 * boxBlur(ex1) should return [[1]]
 * because (1+1+1+1+7+1+1+1+1) = 15/9 = 1.6666 => 1
 * 
 * Example 2:
 * let ex2 = [
 *     [7, 4, 0, 1],
 *     [5, 6, 2, 2],
 *     [6, 10, 7, 8],
 *     [1, 4, 2, 0]
 * ]
 boxBlur(ex2);
 returns [[5,4], [4,4]]
 */


/**Box Blur
 * returns a nested array with the average of a 3x3 neighboring grid
 * @param {number[][]} image 
 * @return {number[][]} a 2D matrix of all the 3x3 squares' floored averages
 */
function boxBlur(image) {

    var sumOfGrid = (nestArr, i, j) => {
        let sum = 0;
        sum += nestArr[i][j] + nestArr[i][j + 1] + nestArr[i][j + 2];
        sum += nestArr[i + 1][j] + nestArr[i + 1][j + 1] + nestArr[i + 1][j + 2];
        sum += nestArr[i + 2][j] + nestArr[i + 2][j + 1] + nestArr[i + 2][j + 2];
        return sum;
    }
    let width = image[0].length,
        height = image.length,
        ans = [];

    for (let i = 0; i <= height - 3; i++) {
        let innerArr = [];
        for (let j = 0; j <= width - 3; j++) {
            let sum = sumOfGrid(image, i, j);
            let avg = Math.floor(sum / 9);
            innerArr.push(avg);
        }
        ans.push(innerArr);
    }
    return ans;
}
let ex1 = [
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]
]
let ex2 = [
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]
]
console.log(boxBlur(ex1));
console.log();
console.log(boxBlur(ex2));