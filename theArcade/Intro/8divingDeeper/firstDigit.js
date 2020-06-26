/**First Digit
 * Find the leftmost digit that occurs in a given string.
 * 
 * Example
 * 
 * For inputString = "var_1__Int", the output should be
 * firstDigit(inputString) = '1';
 * For inputString = "q2q-q", the output should be
 * firstDigit(inputString) = '2';
 * For inputString = "0ss", the output should be
 * firstDigit(inputString) = '0'.
 * @param {string} inputString 
 * @returns {string} a number as a string
 */
function firstDigit(inputString) {

    let i = 0;

    for (let i = 0; i < inputString.length; i++) {

        if (inputString[i].match(/[0-9]/i)) {
            let a = inputString[i].match(/[0-9]/i)[0];
            return a;
        }

    }

}