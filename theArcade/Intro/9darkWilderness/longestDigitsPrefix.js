/**Longest Digits Prefix
 * Given a string, output its longest prefix which contains only digits.
 * 
 * Example
 * 
 * For inputString = "123aa1", the output should be
 * longestDigitsPrefix(inputString) = "123".
 */
function longestDigitsPrefix(inputString) {
    let rnt = "";
    for (let letter of inputString) {
        if (letter.match(/[0-9]/i)) {
            rnt += letter;
        } else {
            return rnt;
        }
    }
    return rnt;
}
