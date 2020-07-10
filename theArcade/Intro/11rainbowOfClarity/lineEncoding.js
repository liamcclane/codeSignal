/**Line Encoding
 * Given a string, return its encoding defined as follows:
 * 
 * First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
 * for example, "aabbbc" is divided into ["aa", "bbb", "c"]
 * Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
 * for example, substring "bbb" is replaced by "3b"
 * Finally, all the new strings are concatenated together in the same order and a new string is returned.
 * Example
 * 
 * For s = "aabbbc", the output should be
 * lineEncoding(s) = "2a3bc".
 * @param {string} s 
 * @returns {string}
 */
function lineEncoding(s) {
    let count = 1, ans = "", letter = s[0];
    for(let i = 0; i < s.length; i++) {
        if(i == s.length-1) {
            // just check if it is a new letter or being added
            if(letter == s[i]) {
                if(count != 1) {ans += count.toString() + letter;}
                else {ans += letter;}
            }
        } else {
            if(s[i] === s[i+1]) {
                count++;
            } else {
                if(count == 1) {ans += letter}
                else {
                    ans += count.toString() + letter;    
                }
                count = 1;
                letter = s[i+1];
            }
        }
    }
    return ans;
}