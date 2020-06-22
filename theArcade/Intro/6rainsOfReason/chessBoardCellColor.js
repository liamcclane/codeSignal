/** Chess Board Cell Color
 * Given two cells on the standard chess board, determine whether they have the same color or not.
 * @param {string} cell1 examples "B5" 
 * @param {string} cell2 examples "H8" 
 * @returns {boolean} true or false of same color
 */
function chessBoardCellColor(cell1, cell2) {
   
    let row = "ABCDEFGH";
    sq1 = (row.indexOf(cell1[0]) * 8) + Number(cell1[1]),
        sq2 = (row.indexOf(cell2[0]) * 8) + Number(cell2[1]);
    // these two if statements take into account the off set rows
    if(row.indexOf(cell1[0]) % 2 === 0) {sq1++}
    if(row.indexOf(cell2[0]) % 2 === 0) {sq2++}
    if (sq1 % 2 === 0 && sq2 % 2 === 0) { return true }
    if (sq1 % 2 === 0 && sq2 % 2 === 1) { return false }
    if (sq1 % 2 === 1 && sq2 % 2 === 0) { return false }
    if (sq1 % 2 === 1 && sq2 % 2 === 1) { return true }
}
console.log(chessBoardCellColor("A1", "C3"));
// console.log(chessBoardCellColor("A2", "D4"));
// console.log(chessBoardCellColor("A3", "D4"));
// console.log(chessBoardCellColor("A4", "D4"));
// console.log(chessBoardCellColor("A5", "D4"));
// console.log("B rows")
// console.log(chessBoardCellColor("B1", "D4"));
// console.log(chessBoardCellColor("B2", "D4"));
// console.log(chessBoardCellColor("B3", "D4"));
// console.log(chessBoardCellColor("B4", "D4"));
// console.log(chessBoardCellColor("B5", "D4"));