/**Variable Name
 * Correct variable names consist only of English letters, 
 * digits and underscores and they can't start with a digit.
 * 
 * Check if the given string is a correct variable name.
 * @param {*} name 
 */
function variableName(name) {
    if (Number(name[0]) || name[0] === "0") { return false; }
    for(let letter of name) {
        if(!(letter.match(/[a-z]/i) || 
            letter === "_" ||
            letter.match(/[A-Z]/i) || 
            letter.match(/[0-9]/i))) {
                return false;
                } 
    }
    return true;
}

console.log(Number("0") ? "true" : "false");
console.log(Number("1") ? "true" : "false");
// console.log(variableName("varible"))
// console.log(variableName("varible]"))
// console.log(variableName("0ss"))