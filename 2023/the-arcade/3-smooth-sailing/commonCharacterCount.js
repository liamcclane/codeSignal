/**
 * Given two strings, find the number of common characters between them.
 * @param {String} s1 
 * @param {String} s2 
 * @returns {number}
 */
function solution(s1, s2) {
    let minString = s1.length < s2.length ? s1 : s2,
        maxString = s1.length >= s2.length ? s1 : s2;
    
    for(let i = 0; i < minString.length; i++) {
        maxString = maxString.replace(minString[i], "*"); 
    }
    let count = 0;
    for(let i = 0; i < maxString.length; i++) {
        if(maxString[i] == "*") {
            count++;
        }
    }
    return count;
}
