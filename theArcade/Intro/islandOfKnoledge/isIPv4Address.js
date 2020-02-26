/**
 * 
 * @param {*} inputString 
 * @returns {boolean}
 */
function isIPv4Address(inputString) {
    if(inputString.length < 11) return false;
    let count = 0;
    let start = 0;
    let stop = 0;
    for(let i=0; i<inputString.length; i++){
        if(inputString[i] === '.') count ++;
        if(count==1) start = i;
        if(count==2) stop = i;
    }
    return false
}
console.log(isIPv4Address("1.4e453454.444"))
function reflowLines(lineLength, lines) {
  
  // Your code here. Output to console.
}
