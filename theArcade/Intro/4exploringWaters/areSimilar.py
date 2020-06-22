# Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
    # Given two arrays a and b, check whether they are similar.

# Example
    # For a = [1, 2, 3] and b = [1, 2, 3], the output should be
    # areSimilar(a, b) = true.

    # The arrays are equal, no need to swap any elements.

    # For a = [1, 2, 3] and b = [2, 1, 3], the output should be
    # areSimilar(a, b) = true.

    # We can obtain b from a by swapping 2 and 1 in b.

    # For a = [1, 2, 2] and b = [2, 1, 1], the output should be
    # areSimilar(a, b) = false.

    # Any swap of any two elements either in a or in b won't make a and b equal.

# Input/Output

    # [execution time limit] 4 seconds (py3)

    # [input] array.integer a

    # Array of integers.

    # Guaranteed constraints:
    # 3 ≤ a.length ≤ 105,
    # 1 ≤ a[i] ≤ 1000.

    # [input] array.integer b

    # Array of integers of the same length as a.

    # Guaranteed constraints:
    # b.length = a.length,
    # 1 ≤ b[i] ≤ 1000.

    # [output] boolean

    # true if a and b are similar, false otherwise.

def areSimilarAgain(a,b):
    
    count = 0 
    antiCount = 0 
    indexOfSim = []
    
    for i in range(len(a)):
        if a[i] != b[i]:
            indexOfSim.append(i)
            count += 1
        else:
            antiCount += 1 
    
    if count == 2: 
        if a[indexOfSim[0]] == b[indexOfSim[1]] and a[indexOfSim[1]] == b[indexOfSim[0]]:
            return True
    
    if antiCount == len(a):
        return True
    
    return False
# print(areSimilarAgain([1,2,3],[2,4,1]),"line 84") # returns False
# print(areSimilarAgain([1,1,2],[2,2,1]),"line 85") # returns False
# print(areSimilarAgain([1,1,1,1,3],[3,3,3,3,1]),"line 86") # returns False
# print(areSimilarAgain([3,4,6],[4,6,3])) # returns False
# print(areSimilarAgain([3,4,6],[4,6,3])) # returns False
# print(areSimilarAgain([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
#                       [832, 998, 148, 570, 533, 561, 455, 147, 894, 279])) # returns False
print(areSimilarAgain([1,2,2],[2,1,1]))
# hi Toan can you see me live typing?
# yes that is cool how can we comment to each other?

# I can't run the code cuz I don't have the file

# so I guess you can only really read and help me code what is on my screen
# interresting..