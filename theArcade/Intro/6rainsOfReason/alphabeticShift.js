/**Alphabetical Shift
 * Given a string, your task is to replace each of its characters 
 * by the next one in the English alphabet; i.e. replace a with b, 
 * replace b with c, etc (z would be replaced by a).
 * @param {string} inputString 
 * @returns {string} returns a string shifted one ahead
 */
function alphabeticShift(inputString) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz', ansString = "";
    for(let letter of inputString) {
        let n = alphabet.indexOf(letter);
        ansString += alphabet[n+1>= 26 ? 0 : n+1 ];
    }
    return ansString;
}
console.log(alphabeticShift("catz"));
