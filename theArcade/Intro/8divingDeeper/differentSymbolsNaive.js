/**Different Symbols Native
 * Given a string, find the number of different characters in it.
 * 
 * Example
 * 
 * For s = "cabca", the output should be
 * differentSymbolsNaive(s) = 3.
 * 
 * There are 3 different characters a, b and c.
 * 
 * Input/Output
 * 
 * [execution time limit] 4 seconds (js)
 * 
 * [input] string s
 * 
 * A string of lowercase English letters.
 * 
 * Guaranteed constraints:
 * 3 ≤ s.length ≤ 1000.
 * 
 * [output] integer
 * @param {  } s 
 * @returns {  }
 */
function differentSymbolsNaive(s) {
    let dict = {};
    for (let letter of s) {
        if (!(letter in dict)) {
            dict[letter] = 1
        }
    }
    return Object.entries(dict).length;
}