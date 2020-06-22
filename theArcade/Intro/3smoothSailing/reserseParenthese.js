
function reverseInParentheses(inputString){

    let output = "";
    let bracketContent = "";
    let bracketCounter = 0;
    
    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString[i];
        
        switch (currentChar) {
            case "(":
                if (bracketCounter !== 0) {
                    bracketContent += currentChar;
                }
                bracketCounter++;
                break;
            case ")":
                if (bracketCounter !== 1) {
                    bracketContent += currentChar;
                    console.log('line 20 bracket content not equal 1::',bracketContent)
                }
                if (bracketCounter === 1) {
                    console.log('line 23 bracket content before recursion ::',bracketContent)
                    output += reverseInParentheses(bracketContent).split("").reverse().join("");
                    console.log('line 25: output after recursion::',output)
                    bracketContent = "";    
                }
                bracketCounter--;
                break;
            default:
                if (bracketCounter === 0){
                    output += currentChar;
                    console.log('line 33: output::',output)
                } else {
                    bracketContent += currentChar;
                    console.log('line 36: the brackcontent is ', bracketContent)
                }
                break;
        }
        console.log('line 38: the current letter is ::', currentChar, 'the current output is ::', output)
    }
    return output;

}

// console.log(reverseInParentheses('fo(bal(askdjf)(ar))l'))
console.log(reverseInParentheses('ab(cde(fghij)(kl))m'))