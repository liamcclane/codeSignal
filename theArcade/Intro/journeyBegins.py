# Lia McClane

# These are algorthim probelms taken off of CodeSignal.com designed to help
# students and experts keep sharp on all levels

# Level 1: The Jorney Begins
# Given a year, return the century it is in. The first century spans 
# from the year 1 up to and including the year 100, the second - 
# from the year 101 up to and including the year 200, etc.
def centuryFromYear(year):
    if year%100==0:
        return year/100
    else:
        return year/100+1
# centuryFromYear(1799)


# Given the string, check if it is a palindrome.
def checkPalindrom(inputString):
    for i in range(len(inputString)):
        if inputString[i] != inputString[len(inputString)-1-i]: 
            return False
    return True
# print(checkPalindrom('cow'))
# print(checkPalindrom('wow'))

