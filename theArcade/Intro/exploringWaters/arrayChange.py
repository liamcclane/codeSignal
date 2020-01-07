# ARRAY CHANGE
# 
# You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
# 
# Example
# 
# For inputArray = [1, 1, 1], the output should be
# arrayChange(inputArray) = 3.

# the output is three because [1,2,3] is what it should be
# and the dfference between [1,1,1] and [1,2,3] is index 1 and 2 of 1 and 2
def arrayChange(x):
    result = 0

    for i in range(1,len(x)):
        print(f"x[i-i] <= x[i] = {x[i-i]} <= {x[i]}")
        if x[i-i] <= x[i]:
            print("inside if")
            print(f"(x[i-0]+1)-x[i-0] = {x[i-0]+1}-{x[i-0]}")
            result += ((x[i-0]+1)-x[i-0])
    
    return result


print("should out put 3") 
# becuase [1,1(+1),1(+2)] therefore return 3
print(arrayChange([1,1,1]))

# print("should output 5") 
# # becuase [-1000, 0, -2(+3), 0(+2)]
# print(arrayChange([-1000, 0, -2, 0]))

# print("should output 12") 
# # because [2, 1(+2), 10, 1(+10)]
# print(arrayChange([2, 1, 10, 1]))

# print("should output 13")
# # becuase [2, 3, 3(+1), 5, 5(+1), 5(+2), 4(+4), 12, 12(+1), 10(+4), 15]
# print(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]))
\
# print("should output 25559")
# # becuase[3122, -645(+3768‬), 2616(+508‬), 13213, -8069(+21283‬)]
# print(arrayChange([3122, -645, 2616, 13213, -8069]))