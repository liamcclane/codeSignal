# Lia McClane


# Given an array of strings, return another array containing all of its longest strings.
# Example
# For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
# allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

def allLongestStrings(inputArray):
    # first step though the array looking for the longest length of the string

    maxLength = 0

    for strings in inputArray:

        if maxLength < len(strings):

            maxLength = len(strings)

    # now that we have the maxLength look for all the
    # strings that match the length

    answ = []

    for strings in inputArray:

        if maxLength == len(strings):

            answ.append(strings)

    return answ


# Given two strings, find the number of common characters between them.
# Example
# For s1 = "aabcc" and s2 = "adcaa", the output should be
# commonCharacterCount(s1, s2) = 3.
# Strings have 3 common characters - 2 "a"s and 1 "c".
def commonCharacterCount(s1, s2):

    # lets use diconaries to store and compare between the two strings

    s1D = {}

    for letter in s1:

        if letter not in s1D:

            s1D[letter] = 1

        else:

            s1D[letter] += 1

    # now compare if those letters are in the other string

    inCommon = 0

    for letter in s2:

        if letter in s1D:

            s1D[letter] -= 1

            if s1D[letter] >= 0:

                inCommon += 1

    return inCommon


# Ticket numbers usually consist of an even number of digits. A ticket number is considered
# lucky if the sum of the first half of the digits is equal to the sum of the second half.
# Given a ticket number n, determine if it's lucky or not.
# Example
# For n = 1230, the output should be
# isLucky(n) = true;
# For n = 239017, the output should be
# isLucky(n) = false.
def isLucky(n):

    # how out how many numbers are on the ticket

    lengthN = 1
    nCopy = n

    while nCopy//10 > 0:
        nCopy = nCopy//10
        lengthN += 1

    # now find the mid point
    mid = (lengthN / 2) -1
    sum2 = 0
    sum1 = 0

    for i in range(lengthN):

        # print(f'numerator is {(n % (10*(10**i)))} demoninator is {(1*(10**i))}')
        # print(f'i is {i} (n % (10*(10**i)))//(1*(10**i)) is {(n % (10*(10**i)))//(1*(10**i))}')
        if i > mid:
            sum2 += (n % (10*(10**i)))//(1*(10**i))
        else:
            sum1 +=(n % (10*(10**i)))//(1*(10**i))

    # print(f'sum1 is 1{sum1} sum2 is {sum2}')
    if sum1 == sum2:
        return True
    else:
        return False

# print(isLucky(4655))
# print('*-'*10)
# print('123456%10 = ', (123456 % 10)//1)
# print('123456%100 = ', (123456 % 100)//10)
# print('123456%1000 = ', (123456 % 1000)//100)
# print('123456%10000 = ', (123456 % 10000)//1000)
# print('123456%10000 = ', (123456 % 100000)//10000)
# print('123456%1000000 = ', (123456 % 1000000)//100000)
# print('*'*10)
# print('9876%10 = ', (9876 % 10)//1)
# print('9876%100 = ', (9876 % 100)//10)
# print('9876%1000 = ', (9876 % 1000)//100)
# print('9876%10000 = ', (9876 % 10000)//1000)


# Some people are standing in a row in a park. There are trees between them 
# which cannot be moved. Your task is to rearrange the people by their heights in a 
# non-descending order without moving the trees. People can be very tall!
# Example
# For           a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
# sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
def sortByHeight(a):

    arrOfIndexes = []
    
    for i in range(len(a)):
        if a[i] is not -1:
            arrOfIndexes.append(i)
    
    for val in arrOfIndexes:
        print(val)
    
    sortVals = []
    for val in arrOfIndexes:
        sortVals.append(a[val])

    sortVals.sort()

    count = 0
    for i in range(len(a)):
        if a[i] is not -1:
            a[i] = sortVals[count]
            count += 1
    
    return a

# print(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))



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

def reverseInParentheses(inputString):
    
    result = ''

    return result

xs = [()]
res = [False] * 2
print(xs)
print(res)