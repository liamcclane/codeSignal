/**String Rearrangement
 * 
 * Given an array of equal-length strings, you'd like to know if it's possible 
 * to rearrange the order of the elements in such a way that each consecutive 
 * pair of strings differ by exactly one character. Return true if it's possible, 
 * and false if not.

 * Note: You're only rearranging the order of the strings, 
 * not the order of the letters within the strings!
 * 
 * Example
 * 
 * For inputArray = ["aba", "bbb", "bab"], the output should be
 * stringsRearrangement(inputArray) = false.
 * 
 * There are 6 possible arrangements for these strings:
 * 
 * ["aba", "bbb", "bab"]
 * ["aba", "bab", "bbb"]
 * ["bbb", "aba", "bab"]
 * ["bbb", "bab", "aba"]
 * ["bab", "bbb", "aba"]
 * ["bab", "aba", "bbb"]
 * None of these satisfy the condition of consecutive strings differing by 
 * 1 character, so the answer is false.
 * 
 * For inputArray = ["ab", "bb", "aa"], the output should be
 * stringsRearrangement(inputArray) = true.
 * 
 * It's possible to arrange these strings in a way that each consecutive 
 * pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), 
 * so return true.
 * @param {string[]} inputArray 
 * @returns {} 
 */
function stringsRearrangement(inputArray) {

    const checkArrangment = (arr) => {
        // console.log(arr +  " arr");
        for(let front = 1, back = 0; front < arr.length; front++, back++) {
            let frontStr = arr[front], backStr = arr[back];
            let differenceCount = 0;
            for(let i = 0; i < frontStr.length; i++) {
                if(frontStr[i] != backStr[i]) {
                    differenceCount++;
                }
            }
            // console.log(differenceCount + " differenceCount\n")
            if(differenceCount != 1) {return false;}
        }
        return true;
    }
    const permutator = (inputArr) => {
        let result = [];
        const permute = (arr, m = []) => {
            if (arr.length === 0) {
                // result.push(m);
                return checkArrangment(m);
            } else {
                for (let i = 0; i < arr.length; i++) {
                    let curr = arr.slice();
                    let next = curr.splice(i, 1);
                    if(permute(curr.slice(), m.concat(next))){
                        return true;
                    }
                }
                return false;
            }
        };
        return permute(inputArr)
    };
    return permutator(inputArray);
}
