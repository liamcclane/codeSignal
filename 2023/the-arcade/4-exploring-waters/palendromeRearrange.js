/**
 * Given a string, find out if its characters can be rearranged to form a palindrome.
 * @param {String} inputString 
 * @returns {boolean}
 */
function palendromeRearranging(inputString) {
    let oddCount = 0, dict = {};
    for(let letter of inputString) {
        if(letter in dict) {
            dict[letter]++;
        } else {
            dict[letter] = 1;
        }
    }
    for(let key in dict) {
        if(dict[key] % 2 != 0) {
            oddCount++;
        }
        if(oddCount >= 2) {
            return false;
        }
    }
    return true;
}