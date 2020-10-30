/**
 * Given some integer, find the maximal number you can 
 * obtain by deleting exactly one digit of the given number.
 * example 
 * 152
 * returns 52
 */
function deleteDigit(n) {

    let max = 0, num = n.toString(), numArr = Array.from(num);
    for (let i = 0; i < numArr.length; i++) {
        let checkArr = numArr.slice(0,i).concat(numArr.slice(i + 1, numArr.length));
        let strNum = checkArr.reduce((accum, val) => accum + val); 
        let checkNum = parseInt(strNum);
        if(checkNum> max) {
            max = checkNum;
        }
    }
    return max;

}
