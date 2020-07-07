/**Bishop and Pawn
 * Given the positions of a white bishop and a black pawn on the 
 * standard chess board, determine whether the bishop can capture 
 * the pawn in one move.
 *
 * The bishop has no restrictions in distance for each move, 
 * but is limited to diagonal movement.
 * @param {string} bishop example "a1"
 * @param {string} pawn
 * @returns {boolean} 
 */
function bishopAndPawn(bishop, pawn) {

    let row = "abcdefgh";
    
    // let listOfMoves = [];

    // let bRow = bishop[0], bHeight = Number(bishop[1]);

    // for (let rowMove = row.indexOf(bRow),
    //     heightMove = bHeight,
    //     i = 1; i <= 8;
    //     i++, rowMove++, heightMove++) {
    //     if (rowMove == row.length) { rowMove = 1 }
    //     if (heightMove == row.length+1) { heightMove = 1 }
    //     listOfMoves.push(row[rowMove] + "" + heightMove);
    // }

    // return listOfMoves;

}

console.log(bishopAndPawn("d4", "c3"));
console.log(bishopAndPawn("a1", "c3"));