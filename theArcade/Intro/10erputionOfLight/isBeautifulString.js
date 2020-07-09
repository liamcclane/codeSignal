/**Is Beautiful String
 * A string is said to be beautiful if each letter in the string 
 * appears at most as many times as the previous letter in the 
 * alphabet within the string; ie: b occurs no more times 
 * than a; c occurs no more times than b; etc.
 * 
 * Given a string, check whether it is beautiful.
 * 
 * Example
 * 
 * For inputString = "bbbaacdafe", the output should be 
 * isBeautifulString(inputString) = true.
 * 
 * This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 
 * f (and 0 of every other letter), so since there aren't 
 * any letters that appear more frequently than the previous 
 * letter, this string qualifies as beautiful.
 * 
 * For inputString = "aabbb", the output should be 
 * isBeautifulString(inputString) = false.
 * 
 * Since there are more bs than as, this string is not beautiful.
 * 
 * For inputString = "bbc", the output should be 
 * isBeautifulString(inputString) = false.
 * 
 * Although there are more bs than cs, this string is not 
 * beautiful because there are no as, so therefore 
 * there are more bs than as.
 * @param {string} inputString 
 * @returns {boolean}
 */
function isBeautifulString(inputString) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let dict = {};
    for (let letter of alphabet) {
        dict[letter] = 0;
    }
    // console.log(dict);
    for (let letter of inputString) {
        dict[letter] += 1;
    }
    // console.log(dict);
    let sortedArr = Object.entries(dict).sort((a, b) => {
        if (a[0] > b[0]) return 1
        if (a[0] < b[0]) return -1
        return 0;
    })
    // console.log(sortedArr);
    for (let i = 1; i < 26; i++) {
        // console.log(sortedArr[i]);
        if (sortedArr[i - 1][1] < sortedArr[i][1]) return false
    }
    return true;
}

const allTrue = () => {// Test Case 1
    console.log(isBeautifulString("bbbaacdafe")); // true
    console.log();

    // Test Case 6
    console.log(isBeautifulString("abcdefghijklmnopqrstuvwxyz")); // true
    console.log();

}
const allFalse = () => {
    // Test Case 9
    console.log(isBeautifulString("zaa")); // false
    console.log();

    // Test Case 2
    console.log(isBeautifulString("aabbb")); // false 
    console.log();

    // Test Case 3
    console.log(isBeautifulString("bbc")); // false
    console.log();

    // Test Case 4
    console.log(isBeautifulString("bbbaa")); // false
    console.log();

    // Test Case 5
    console.log("5", isBeautifulString("abcdefghijklmnopqrstuvwxyzz")); // false
    console.log();


    // Test Case 10
    console.log("10", isBeautifulString("zyy")); // false
    console.log();
}
// allTrue();
allFalse();

// DEAD CODE
// let dict = {};

// for (let letter of inputString) {
    //     if (!(letter in dict)) { dict[letter] = 1 }
    //     else { dict[letter] += 1 }
    // }

    // let sortedArr = Object.entries(dict).sort((a, b) => {
        //     if (a[0] > b[0]) { return 1; }
        //     if (a[0] < b[0]) { return -1; }
        //     return 0;
        // });

        // // console.log(sortedArr);

// for (let i = 0; i < sortedArr.length - 1; i++) {
//     if (sortedArr[i][1] >= sortedArr[i + 1][1]) {
//     } else {
//         return false;
//     }
// }
// return true;