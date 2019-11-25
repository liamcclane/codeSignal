# Given a rectangular matrix of characters, add a border of asterisks(*) to it.

# Example

# For

# picture = ["abc",
#            "ded"]
# the output should be

# addBorder(picture) = ["*****",
#                       "*abc*",
#                       "*ded*",
#                       "*****"]


def addBorder(picture):
    
    output = ['','']
    picD = {}
    
    # fill the dictonary and output
    for i in range(len(picture)):
        picD[i] = picture[i]
        output.append('')
    print(picD)

    print(len(output))
    print(len(picture))
    
    for i in range(len(output)):
        for j in range(len(picture)):
            if i==0 or  i==len(output):
                output[i]+='*'
            else:
                if j == 0 or j == len(picture):
                    output[i]+='*'

    return output
            


print(addBorder(['abc','def']))
print('lask'+'*')