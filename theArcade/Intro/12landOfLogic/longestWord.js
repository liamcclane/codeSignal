/**
 * Define a word as a sequence of consecutive English letters. 
 * Find the longest word from the given string.
 */
function longestWord(text) {
    let answer = "", runner = "";
    for (let i = 0; i < text.length; i++) {
        if(text.charAt(i).match('[a-zA-Z]')){
            runner += text.charAt(i);
            console.log(runner);
            if(i == text.length -1) {
                if(answer.length < runner.length) {
                    answer = runner;
                }
            }
        } else if (text[i] == ' ' ) {
            if(answer.length < runner.length) {
                answer = runner;
            }
            runner = "";
        }
    }
    if(answer.length == 0) {
        return text;
    }
    return answer;
}
console.log(longestWord("my name is liamcclane but you can call me lia17jeanmcclane"));