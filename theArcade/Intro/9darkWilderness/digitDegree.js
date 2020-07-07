/**Digit Degree
 * Let's define digit degree of some positive integer as the number of times we need to 
 * replace this number with the sum of its digits until we get to a one digit number.
 * 
 * Given an integer, find its digit degree.
 * 
 * Example
 * 
 * For n = 5, the output should be
 * digitDegree(n) = 0;
 * For n = 100, the output should be
 * digitDegree(n) = 1.
 * 1 + 0 + 0 = 1.
 * For n = 91, the output should be
 * digitDegree(n) = 2.
 * 9 + 1 = 10 -> 1 + 0 = 1.
 * 
 */
function digitDegree(n) {

    let count = 0, nCopy = n;

    function helper(num) {
        let str = num.toString();
        let newN = 0;
        for (let val of str) {
            newN += Number(val);
        }
        return newN;
    }

    while (nCopy >= 10) {
        nCopy = helper(nCopy, count);
        count++;
    }

    return count;
}
