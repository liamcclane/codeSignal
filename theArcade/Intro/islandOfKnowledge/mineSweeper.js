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

    const countNeighboringBombs = (matrix, i, j) => {
        let count = 0;
        // check itself 
        // matrix[i][j] ? count += 1 : ""
        // above
        i + 1 >= matrix.length ? " " : matrix[i + 1][j] ? count += 1 : ""
        // if (matrix[i + 1][j]) count += 1
        // below
        i - 1 < 0 ? " " : matrix[i - 1][j] ? count += 1 : ""
        // left
        j - 1 < 0 ? " " : matrix[i][j - 1] ? count += 1 : ""
        // right
        j + 1 >= matrix[i].length ? " " : matrix[i][j + 1] ? count += 1 : ""

        // down right
        if (i + 1 < matrix.length && j - 1 > 0) {
            if (matrix[i + 1][j - 1]) count++;
        }
        // down left
        if (i + 1 < matrix.length && j + 1 < matrix[i].length) {
            if (matrix[i + 1][j + 1]) count++;
        }

        // up left
        if (i - 1 > 0 && j - 1 < 0) {
            if (matrix[i - 1][j - 1]) count++;
        }
        // up right 
        if (i - 1 > 0 && j + 1 < matrix[i].length) {
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
console.log(minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
]))