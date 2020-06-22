/**
 * Given a string, find out if its characters can be rearranged to form a palindrome.
 * 
 * Example
 * 
 * For inputString = "aabb", the output should be
 * palindromeRearranging(inputString) = true.
 * 
 * We can rearrange "aabb" to make "abba", which is a palindrome.
 * 
 * 
 * @param {*} inputString 
 */
function palindromeRearranging(inputString) {
    let dict = {};
    for(let letter of inputString){
        if(letter in dict){
            dict[letter]++;
        } else {
            dict[letter] = 1;
        }
    }
    // console.log(dict);
    let numOfOdds = 0;
    for(key in dict){
        if(dict[key]%2 == 1){
            numOfOdds++;
        }
        if(numOfOdds>1){
            return false;
        }
    }
    // console.log(numOfOdds);
    // let len = inputString.length;
    // if(len%2==1){
    //     console.log(len);
    // }
    return true;
}
let str = "abnbn";
console.log(palindromeRearranging(str));
