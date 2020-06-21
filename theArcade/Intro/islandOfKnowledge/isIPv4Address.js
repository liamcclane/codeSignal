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
    let splitArr = inputString.split(".");
    if (splitArr.length != 4) { return false }
    for (let ele of splitArr) {
        if (ele.match(/[a-z]/i)) { return false }
        if (parseInt(ele) > 255) { return false }
        if (ele === "") { return false }
        if (parseInt(ele) == 0 && ele.length > 1) { return false; }
        if (parseInt(ele) < 100 && ele.length > 2) { return false }
        if (parseInt(ele) < 10 && ele.length > 1) { return false }
    };
    return true
}
// false
console.log(isIPv4Address("1.4e453454.444"));
console.log(isIPv4Address("13.432.444"));
console.log(isIPv4Address("172.316.254.1"));
console.log(isIPv4Address("01.233.161.131"));
// true
console.log(isIPv4Address("0.254.255.0"));
console.log(isIPv4Address("172.16.254.1"));