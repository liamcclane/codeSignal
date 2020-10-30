/**Different Squared / Level-12 Land Of Logic
 * Given a rectangular matrix containing only digits, 
 * calculate the number of different 2 × 2 squares in it.
 */
function differentSquares(matrix) {

    let dict = {};
    
    for(let row = 0; row < matrix.length - 1; row++) {
        for(let col = 0; col < matrix[row].length - 1; col++) {
            let miniKey = "" + matrix[row][col] + "" + matrix[row][col+1] + "" + matrix[row +1][col] + "" + matrix[row + 1][col+1];
            if(!(miniKey in dict)) {
                dict[miniKey] = 0;
            }
        }
    }

    return Object.keys(dict).length;
}
/**Example
 * For
 *  
 * matrix = [[1, 2, 1],
 *           [2, 2, 2],
 *           [2, 2, 2],
 *           [1, 2, 3],
 *           [2, 2, 1]]
 *           the output should be
 * differentSquares(matrix) = 6.
 * 
 * Here are all 6 different 2 × 2 squares:
 * 
 *-1 2
 * 2 2
 *-2 1
 * 2 2
 *-2 2
 * 2 2
 *-2 2
 * 1 2
 *-2 2
 * 2 3
 *-2 3
 * 2 1
 */
