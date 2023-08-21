/**
 * Write a function that reverses characters in (possibly nested) parentheses in the input string.
 * 
 * Input strings will always be well-formed with matching ()s.
 * @param {String} inputString 
 * @returns {String}
 */
function solution(inputString) {

    const revesreString = s => s.split('').reverse().join('');

    let len = inputString.length; 
    const open = [];
    const pairs = [];
    let dummy = inputString;

    for(let i = 0; i < len; i++) {
        if(inputString[i] == '(') {
            open.push(i);
        }
        if(inputString[i] == ')') {
            pairs.push({
                open: open.pop(),
                close: i,
            });
        }
    }
    for(let pair of pairs) {
        let subString = dummy.substring(pair.open, pair.close + 1);
        let reversed = revesreString(subString);
        dummy = dummy.replace(subString, reversed);
    }

    return dummy.replace(/\(/g, '').replace(/\)/g, '');
}
