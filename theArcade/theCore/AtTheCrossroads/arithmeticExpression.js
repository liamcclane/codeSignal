/***Arithmetic Expression****
 *
 * Consider an arithmetic expression of the form a#b=c. Check whether 
 * it is possible to replace # with one of the four signs: +, -, * or / 
 * to obtain a correct expression
 * 
    * Example 1:
    * For a = 2, b = 3, and c = 5, the output should be
    * arithmeticExpression(a, b, c) = true.
    * 
    * We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.
 * 
 * 
    * Example 2:
    * For a = 8, b = 2, and c = 4, the output should be
    * arithmeticExpression(a, b, c) = true.
    * 
    * We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.
 *
 * 
    * Example 3:
    * For a = 8, b = 3, and c = 2, the output should be
    * arithmeticExpression(a, b, c) = false.
    * 
    * 8 + 3 = 11 ≠ 2;
    * 8 - 3 = 5 ≠ 2;
    * 8 * 3 = 24 ≠ 2;
    * 8 / 3 = 2.(6) ≠ 2.
    * So the answer is false.
 * 
 */
function arithmeticExpression(a, b, c) {
    if(a+b==c || a/b == c || a-b == c || a*b==c){
        return true
    }
    return falsen
}

/***Highest voted online****/
function arithmeticExpressionOpt(A,B,C){
    
    // console.log([...'+-*/'].some(op => eval(`${A}${op}${B}`) === C))
    return [...'+-*/'].some(op => eval(`${A}${op}${B}`) === C)
}
arithmeticExpressionOpt(2,3,5)