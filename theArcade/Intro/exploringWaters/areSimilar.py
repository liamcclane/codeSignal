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


def areSimilarLia(a,b):

    # do this check first since it is gaurenteed that the two arrays are of the same lenght
    notMatchingCount = 0
    for i in range(len(a)):
        if a[i] is not b[i]:
            notMatchingCount += 1

    if notMatchingCount > 2:
        return False
    
    # this does quantity checking
    dictA = {}
    dictB = {}

    # this does element checking and fills in the dictonaries
    for val in a:
        print(val, 'in a')
        if val not in b:
            return False
        if val not in dictA:
            dictA[val] = 1
        else:
            dictA[val] += 1
    
    for val in b:
        print(val ,'in b')
        if val not in a:
            return False
        if val not in dictB:
            dictB[val] = 1
        else:
            dictB[val] += 1

    print(dictA)
    print(dictB)

    # now we need to check if the matching keys in the dictonaries match
    for key in dictA:
        print("dictA[",key,"] is not dictB[",key,"]", dictA[key] ,":",dictB[key])
        if dictA[key] is not dictB[key]:
            return False

    
    return True

# print(areSimilarLia([1,2,3],[2,4,1]),"line 84") # returns False
# print(areSimilarLia([1,1,2],[2,2,1]),"line 85") # returns False
# print(areSimilarLia([1,1,1,1,3],[3,3,3,3,1]),"line 86") # returns False
# print(areSimilarLia([3,4,6],[4,6,3])) # returns False
# print(areSimilarLia([3,4,6],[4,6,3])) # returns False
print(areSimilarLia([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
                    [832, 998, 148, 570, 533, 561, 455, 147, 894, 279])) # returns False

# hi Toan can you see me live typing?
# yes that is cool how can we comment to each other?

# I can't run the code cuz I don't have the file

# so I guess you can only really read and help me code what is on my screen
# interresting..