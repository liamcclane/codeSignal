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
    
    output = []

    s = "**"
    for i in range(len(picture)):
        s += "*"

    output.append(s)

    # fill the dictonary and output
    for val in picture:
        
        output.append("*" + val + "*")

        print(output)

    output.append(s)

    return output

print(addBorder(['abc','def']))
