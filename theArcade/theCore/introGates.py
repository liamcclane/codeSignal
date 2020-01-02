# Algos taken off of Codesignal.com
# Lia McClane
# Level: The Core/Into to the Gates


# You are given a two-digit integer n. Return the sum of its digits.

# Example
# For n = 29, the output should be
# addTwoDigits(n) = 11.
def addTwoDigits(n):
    
    d1 = n%10//1
    d2 = n//10
    
    return d1+d2



# Given an integer n, return the largest number that contains exactly n digits.

# Example
# For n = 2, the output should be
# largestNumber(n) = 99.
def largestNumber(n):
    
    result = 0
    for i in range(n):
        result += 9*10**i
        
    return result

# n children have got m pieces of candy. They want to eat as much candy as they can, 
# but each child must eat exactly the same amount of candy as any other child. 
# Determine how many pieces of candy will be eaten by all the children together. 
# Individual pieces of candy cannot be split.

# Example
# For n = 3 and m = 10, the output should be
# candies(n, m) = 9.
# Each child will eat 3 pieces. So the answer is 9.\
def candies(n, m):
    return (m//n)*n




# Your friend advised you to see a new performance in the most popular theater in the city. 
# He knows a lot about art and his advice is usually good, but not this time: 
# the performance turned out to be awfully dull. It's so bad you want to sneak out, 
# which is quite simple, especially since the exit is located right behind your row to the left. 
# All you need to do is climb over your seat and make your way to the exit.

# The main problem is your shyness: you're afraid that you'll end up blocking the view 
# (even if only for a couple of seconds) of all the people who sit behind you and in 
# your column or the columns to your left. To gain some courage, you decide to calculate 
# the number of such people and see if you can possibly make it to the exit without 
# disturbing too many people.

# Given the total number of rows and columns in the theater 
# (nRows and nCols, respectively), and the row and column you're sitting in, 
# return the number of people who sit strictly behind you and in your column 
# or to the left, assuming all seats are occupied.

# Example
# For nCols = 16, nRows = 11, col = 5, and row = 3, the output should be
# seatsInTheater(nCols, nRows, col, row) = 96.
def seatsInTheater(nCols, nRows, col, row):
    count = nRows - row

    for i in range(nCols - col):
        count += (nRows - row)

    return count
# print(seatsInTheater(16,11,5,3))
# print(seatsInTheater(1,1,1,1))


# ----MaxMultiple------
# Given a divisor and a bound, find the largest integer N such that:

# N is divisible by divisor.
# N is less than or equal to bound.
# N is greater than 0.
# It is guaranteed that such a number exists.

# Example:
    # For divisor = 3 and bound = 10, the output should be
    # maxMultiple(divisor, bound) = 9.

    # The largest integer divisible by 3 and not larger than 10 is 9.

def maxMultiple(divisor, bound):
    count = 0
    for i in range(1,bound+1):
        if(i%divisor==0):
            count = i

    return count
# print(maxMultiple(3,9)) # answer 9
# print(maxMultiple(2,11)) # answer 10
# ---voted most efficient----
# def maxMultiple(divisor, bound):
#     return bound - (bound % divisor)


# ---Circle of Nubmers ---
# Consider integer numbers from 0 to n - 1 written down along the circle in such a way 
# that the distance between any two neighboring numbers is equal 
# (note that 0 and n - 1 are neighboring, too).

# Given n and firstNumber, find the number which is written in the radially opposite position 
# to firstNumber.

# Example : 
    # For n = 10 and firstNumber = 2, the output should be
    # circleOfNumbers(n, firstNumber) = 7.

# [input] integer n
    # A positive even integer.

    # Guaranteed constraints:
    # 4 ≤ n ≤ 20.
def circleOfNumbers(n, firstNumber):
    
    if(firstNumber < (n/2)):
        return (n/2)+firstNumber
    elif(firstNumber > (n/2)):
        return firstNumber - (n/2)
    else:
        return 0

# ---Late Ride---
# One night you go for a ride on your motorcycle. 
# At 00:00 you start your engine, and the built-in timer automatically begins 
# counting the length of your ride, in minutes. Off you go to explore the neighborhood.

# When you finally decide to head back, you realize there's a chance 
# the bridges on your route home are up, leaving you stranded! 
# Unfortunately, you don't have your watch on you and don't know 
# what time it is. All you know thanks to the bike's timer is 
# that n minutes have passed since 00:00.

# Using the bike's timer, calculate the current time. 
# Return an answer as the sum of digits that the digital 
# timer in the format hh:mm would show.

def lateRide(n):
    
    diget = 0
    hrs = n//60
    diget += hrs//10
    diget += hrs%10
    mins = (n-(hrs*60))
    diget += mins//10
    diget += mins%10

    return diget

# print(lateRide(808))
# --voted most efficent--
# def lateRide(n):
#     return sum(map(int, str(n // 60 * 100 + n % 60)))

def lateRideClock(n):
    s = ""
    
    hrs = n//60
    s += str(hrs//10)
    s += str(hrs%10)
    s += ":"
    mins = (n-(hrs*60))
    s += str(mins//10)
    s += str(mins%10)
    return s


# ---Phone Call---
# Some phone usage rate may be described as follows:

# first minute of a call costs min1 cents,
# each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
# each minute after 10th costs min11 cents.
# You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

# Example

# For min1 = 3, min2_10 = 1, min11 = 2, and s = 20, the output should be
# phoneCall(min1, min2_10, min11, s) = 14.

# Here's why:

# the first minute costs 3 cents, which leaves you with 20 - 3 = 17 cents;
# the total cost of minutes 2 through 10 is 1 * 9 = 9, so you can talk 9 more minutes and still have 17 - 9 = 8 cents;
# each next minute costs 2 cents, which means that you can talk 8 / 2 = 4 more minutes.
# Thus, the longest call you can make is 1 + 9 + 4 = 14 minutes long.

# Input/Output

# [execution time limit] 4 seconds (py3)

# [input] integer min1

# Guaranteed constraints:
# 1 ≤ min1 ≤ 10.

# [input] integer min2_10

# Guaranteed constraints:
# 1 ≤ min2_10 ≤ 10.

# [input] integer min11

# Guaranteed constraints:
# 1 ≤ min11 ≤ 10.

# [input] integer s

# Guaranteed constraints:
# 2 ≤ s ≤ 500.

# [output] integer
def phoneCall(min1, min2_10, min11, s):
    total = 0 

    if s >= min1:
        total += 1
        s -= min1
    while total < 10 and s > min2_10:
        total += 1
        s -= min2_10
    while s > 0 and s >= min11 and total >= 10:
        total += 1
        s -= min11

    return total

# print(phoneCall(3,1,2,20)) # outputs 14
# print(phoneCall(1,2,1,6)) # outputs 3