/***Is Infinite Process****
 * 
 * Given integers a and b, determine whether the following pseudocode 
 * results in an infinite loop
 * 
 * while a is not equal to b do
 *   increase a by 1
 *   decrease b by 1
 * Assume that the program is executed on a virtual machine which 
 * can store arbitrary long numbers and execute forever.
 */

// we need to check if given prameters will ever equal each other as they move 
// linerally, (ie intersect)
function isInfiniteProcess(a, b) {

    if (a > b) {
        return true
    }

    while (b >= a) {

        if (a == b) {
            return false
        }
        console.log("a: " + a + "  b: " + b)
        a++
        b--
    }

    return true
}
console.log(isInfiniteProcess(2, 6))
console.log()
console.log(isInfiniteProcess(2, 3))
console.log()
console.log(isInfiniteProcess(3, 2))