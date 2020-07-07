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

    let diffRow = row.indexOf((bishop[0])) - row.indexOf((pawn[0]));
    let colDiff = Number(bishop[1]) - Number(pawn[1]);

    diffRow = Math.abs(diffRow)
    colDiff = Math.abs(colDiff)

    console.log(`diffRow ${diffRow}`);
    console.log(`colDiff ${colDiff}`);

    return diffRow === colDiff ? true : false
}


console.log(bishopAndPawn("d4", "c3"));
console.log();
console.log(bishopAndPawn("a1", "c3"));