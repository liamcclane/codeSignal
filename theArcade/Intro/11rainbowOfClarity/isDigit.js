/**Is Digit
 * Determine if the given character is a digit or not.
 * 
 * Example
 * 
 * For symbol = '0', the output should be
 * isDigit(symbol) = true;
 * For symbol = '-', the output should be
 * isDigit(symbol) = false.
 * @param {string}
 * @returns {boolean}
 */
function isDigit(symbol) {
    if (Number(symbol) - 9 || Number(symbol) - 1) return true
    return false;
}