/**Array Replace
 * returns an array with all the elements replaced with 
 * the substitutionElement
 * @param {number[]} inputArray 
 * @param {number} elemToReplace 
 * @param {number} substitutionElem 
 * @returns {number[]} the array with replaced elements
 */
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(ele => ele === elemToReplace ? substitutionElem : ele);
}
/**Array Replace
 * returns an array with all the elements replaced with 
 * the substitutionElement
 * @param {number[]} inputArray 
 * @param {number} elemToReplace 
 * @param {number} substitutionElem 
 * @returns {number[]} the array with replaced elements
 */
const altArrayReplace = (inputArray, elemToReplace, substitutionElem) => {
    let ans = [];
    for (let val of inputArray) {
        ans.push(val === elemToReplace ? substitutionElem : val);
    }
    return ans;
}
