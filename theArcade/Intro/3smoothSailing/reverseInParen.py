# Write a function that reverses characters in (possibly nested) parentheses in the input string.

# Input strings will always be well-formed with matching ()s.

# Example

# For inputString = "(bar)", the output should be
# reverseInParentheses(inputString) = "rab";
# For inputString = "foo(bar)baz", the output should be
# reverseInParentheses(inputString) = "foorabbaz";
# For inputString = "foo(bar)baz(blim)", the output should be
# reverseInParentheses(inputString) = "foorabbazmilb";
# For inputString = "foo(bar(baz))blim", the output should be
# reverseInParentheses(inputString) = "foobazrabblim".
# Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".


# I am going to use recursion to deal with the nested parentheses

    # lots of conditions, we want this to be recursive
    
    # ALWAYS incread or decrease the bracket count when the parenthese are present
    # the inside parenthese string to be passed in recursivley

    
    # when the letter is an end paren we need to consider if our parenCount is exactly 1 becuase then we have an outtermost string to recursively call
        # reverse the innerParen string, 
        # then add it to the result to return, and code will stop and resursivley call until it unfolds all the parenthese
        # once recursion is called we need to clear/reset the insideParen string
    
    # if we are given a inputString with no parenthese or even letters ar all function takes these edge cases into account


def reverseInParentheses(inputString):

    result = ''
    insideParen = ''
    parenCount = 0

    for letter in inputString:
        if letter == '(':
            if parenCount != 0:
                insideParen += letter
            parenCount += 1
        elif letter == ')':
            if parenCount == 1:
                print(f'right before recusion {insideParen}')
                result += reverseInParentheses(insideParen)[len(insideParen)::-1]
                insideParen = ''
                parenCount -=1
                print(result)
            else:
                # call itself, recursion with the insideParen variable and swap eveything around AND our parenCount is at 0,ie
                parenCount -= 1
                insideParen += letter
        else:
            if parenCount == 0:
                result += letter
            else:
                insideParen += letter
        print(f"line 30 '{letter}' inner parentheses: '{insideParen}' the result so far is '{result}' ")

    return result

print(reverseInParentheses('a(b(cde))m')) # returns 'acdebm'