/**
 * An IP address is a numerical label assigned to each device 
 * (e.g., computer, printer) participating in a computer network 
 * that uses the Internet Protocol for communication. 
 * There are two versions of the Internet protocol, and thus two versions 
 * of addresses. One of them is the IPv4 address.
 * 
 * Given a string, find out if it satisfies the IPv4 address naming rules.
 * Example
 * 
 * For inputString = "172.16.254.1", the output should be
 * isIPv4Address(inputString) = true;
 * 
 * For inputString = "172.316.254.1", the output should be
 * isIPv4Address(inputString) = false.
 * 
 * 316 is not in range [0, 255].
 * 
 * For inputString = ".254.255.0", the output should be
 * isIPv4Address(inputString) = false.
 * 
 * There is no first number.
 * @param { string } inputString 
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
