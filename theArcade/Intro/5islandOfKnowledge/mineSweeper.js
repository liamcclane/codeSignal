/**Mine Sweeper
 * In the popular Minesweeper game you have a board with some mines and those cells that 
 * don't contain a mine have a number in it that indicates the total number of mines in 
 * the neighboring cells. Starting off with some arrangement of mines we want to create 
 * a Minesweeper game setup.
 * 
 * 
 * Example: 
 * let ex1 = [
 *     [true, false, false],
 *     [false, true, false],
 *     [false, false, false]
 * ]
 * Output : [
 *              [1,2,1],
 *              [2,1,1],
 *              [1,1,1]
 *          ]
 *
 */
let ex1 = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
]

/**Mine Sweeper
 * given a 2D matrix, returns a 2D matrix with number of neighboring amount of bombs
 * @param {boolean[][]} matrix 
 * @param {number[][]} matrix 
 */
function minesweeper(matrix) {
    // const printMatrix = m => {
    //     let ans = [];
    //     for(let arr of matrix) {
    //         let innerArr = [];
    //         for(let b of arr) {
    //             innerArr.push(b ? 1 : 0);
    //         }
    //         ans.push(innerArr);
    //     }
    //     console.log(ans);
    // }
    // printMatrix(matrix);

    const countNeighboringBombs = (matrix, i, j) => {
        let count = 0;
        // above
        i + 1 >= matrix.length ? " " : matrix[i + 1][j] ? count += 1 : ""
        // below
        i - 1 < 0 ? " " : matrix[i - 1][j] ? count += 1 : ""
        // left
        j - 1 < 0 ? " " : matrix[i][j - 1] ? count += 1 : ""
        // right
        j + 1 >= matrix[i].length ? " " : matrix[i][j + 1] ? count += 1 : ""

        // down right
        if (i + 1 < matrix.length && j - 1 >= 0) {
            if (matrix[i + 1][j - 1]) count++;
        }
        // down left
        if (i + 1 < matrix.length && j + 1 < matrix[i].length) {
            if (matrix[i + 1][j + 1]) count++;
        }
        // up left
        if (i - 1 >= 0 && j - 1 >= 0) {
            if (matrix[i - 1][j - 1]) count++;
        }
        // up right 
        if (i - 1 >= 0 && j + 1 < matrix[i].length) {
            if (matrix[i - 1][j + 1]) count++;
        }
        return count;
    }

    let ans = [];

    for (let i = 0; i < matrix.length; i++) {
        let innerArr = [];
        for (let j = 0; j < matrix[i].length; j++) {
            innerArr.push(countNeighboringBombs(matrix, i, j));
        }
        ans.push(innerArr);
    }

    return ans;
}
let ex3 = [
    [true, false, false, true],
    [false, false, true, false],
    [true, true, false, true]
]
// console.log(minesweeper(ex3));
// console.log(minesweeper([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false],
// ]));
console.log(minesweeper([
    [true, true, true],
    [true, false, true],
    [true, true, true],
]))