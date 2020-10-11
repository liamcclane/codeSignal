/**
 * Given a position of a knight on the standard chessboard, 
 * find the number of different moves the knight can perform.
 * 
 * The knight can move to a square that is two squares 
 * horizontally and one square vertically, or two squares 
 * vertically and one square horizontally away from it. 
 * The complete move therefore looks like the letter L. 
 * Check out the image below to see all valid moves for 
 * a knight piece that is placed on one of the central squares.
 * 
 * Examples:
 * For cell = "a1", the output should be
 * chessKnight(cell) = 2.
 * 
 * For cell = "c2", the output should be
 * chessKnight(cell) = 6.
 * @param {string} in the from "[a-h][1-8]"
 */
function chessKnight(cell) {

    let num = 0, col = '0abcdefgh'.indexOf(cell[0]), row = parseInt(cell[1]);

    // check
    // one 'o'clock
    // eleven 'o'clock
    if (row <= 6) {
        if (col != 8) {
            // console.log("1 o'clock");
            num++;
        }
        if (col != 1) {
            // console.log("11 o'clock");
            num++;
        }
    }

    // two 'o'clock
    // four 'o'clock
    if (col < 7) {
        if (row != 8) {
            // console.log("2 o'clock");
            num++;
        }
        if (row != 1) {
            // console.log("4 o'clock");
            num++;
        }
    }

    // five 'o'clock
    // seven 'o'clock
    if (row > 2) {
        if (col != 8) {
            // console.log("5 o'clock");
            num++;
        }
        if (col != 1) {
            // console.log("7 o'clock");
            num++;
        }
    }

    // eight 'o'clock
    // ten 'o'clock
    if (col > 2) {
        if (row != 8) {
            // console.log("8 o'clock");
            num++;
        }
        if (row != 1) {
            // console.log("10 o'clock");
            num++;
        }
    }
    return num;
}
console.log(chessKnight("a1"), "= 2");
console.log(chessKnight("c2"), "= 6");
console.log(chessKnight("d5"), "= 8");