/**Even Digits Only
 * check if all the digits of the number are even
 * @param {number} n
 * @returns {boolean}  
 */
function evenDigitsOnly(n) {
    let arr = n.toString();
    for (let b of arr) {
        if (parseInt(b) % 2 === 1) { return false }
    }
    return true;
}
console.log(evenDigitsOnly(2416));