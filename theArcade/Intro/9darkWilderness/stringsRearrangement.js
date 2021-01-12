/**String Rearrangement
 * Given an array of equal-length strings, you'd like to know if it's possible 
 * to rearrange the order of the elements in such a way that each consecutive 
 * pair of strings differ by exactly one character. Return true if it's possible, 
 * and false if not.
 * 
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
 * None of these satisfy the condition of consecutive strings 
 * differing by 1 character, so the answer is false.
 * 
 * For inputArray = ["ab", "bb", "aa"], the output should be
 * stringsRearrangement(inputArray) = true.
 * 
 * It's possible to arrange these strings in a way that each 
 * consecutive pair of strings differ by 1 character 
 * (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.
 * @param {*} inputArray 
 * @returns {boolean} inputArray 
 */
const stringsRearrangement = (inputArray) => {
    let copyArr = inputArray;
}
console.log(stringsRearrangement(["aba", "bbb", "bab"]));











/**
 * 
 * @param {*} inputArray 
 * @return {boolean}  
 */
const stringsRearrangementCopy2 = inputArray => {
    /**
     * 
     * @param {*} depth 
     * @param {*} inputArray 
     * @returns {boolean}
     */
    var bruteForce = function (depth, inputArray) {
        /**Swap
         * takes to indexes and swaps their placement inside of the inputArray variable
         * @param {*} i 
         * @param {*} j 
         * @returns {void}
         */
        var swap = function (i, j) {
            tmp = inputArray[i];
            inputArray[i] = inputArray[j];
            inputArray[j] = tmp;
        };
        if (depth === inputArray.length) {
            var correct = true;
            for (var i = 0; i < inputArray.length - 1; i++) {
                var differences = 0;
                for (var j = 0; j < inputArray[i].length; j++) {
                    if (inputArray[i][j] !== inputArray[i + 1][j]) {
                        differences++;
                    }
                }
                if (differences !== 1) {
                    correct = false;
                }
            }
            if (correct) {
                return true;
            }
            return false;
        }
        for (var i = depth; i < inputArray.length; i++) {
            swap(depth, i);
            if (bruteForce(depth + 1, inputArray)) {
                return true;
            }
            swap(depth, i);
        }
        return false;
    };
    if (bruteForce(0, inputArray)) {
        return true;
    }
    return false;
}



/**String Rearrangement
 * 
 * @param {string[]} inputArray 
 * @returns {boolean}
 */
function stringsRearrangementCopy1(inputArray) {
    /**
     * 
     * @param {*} depth 
     * @param {inputArray} inputArray 
     * @returns {boolean}
     */
    var bruteForce = function (depth, inputArray) {
        /**Swap
         * 
         * @param {*} i 
         * @param {*} j 
         * @returns {void}
         */
        var swap = function (i, j) {
            tmp = inputArray[i];
            inputArray[i] = inputArray[j];
            inputArray[j] = tmp;
        };
        if (depth === inputArray.length) {
            for (var i = 0; i < inputArray.length - 1; i++) {
                var differences = 0;
                for (var j = 0; j < inputArray[i].length; j++) {
                    if (inputArray[i][j] !== inputArray[i + 1][j]) {
                        differences++;
                    }
                }
                if (differences !== 1) {
                    return false;
                }
            }
            return true;
        }
        for (var i = depth; i < inputArray.length; i++) {
            // console.log(`i ${i} inputArray ${inputArray} depth :${depth}`);
            swap(depth, i);
            if (bruteForce(depth + 1, inputArray)) {
                return true;
            }
            swap(depth, i);
            // console.log();
        }
        // console.log();
        return false;
    };
    return bruteForce(0, inputArray);
}
