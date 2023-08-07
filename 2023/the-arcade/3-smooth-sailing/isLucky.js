/**
 * Ticket numbers usually consist of an even number of digits. 
 * A ticket number is considered lucky if the sum of the first 
 * half of the digits is equal to the sum of the second half.
 * @param {number} n 
 * @returns {boolean}
 */
function solution(n) {
    const backSum = n.toString()
                    .substr(n.toString().length/2)
                    .split("")
                    .map(ele => parseInt(ele))
                    .reduce((accumulator, currentValue) => accumulator + currentValue);
    const frontSum = n.toString()
                    .substr(0,n.toString().length/2)
                    .split("")
                    .map(ele => parseInt(ele))
                    .reduce((accumulator, currentValue) => accumulator + currentValue);
    return backSum == frontSum;
}

