def arrayChange(x):
    result = 0
    for i in range(1,len(x)):
        if x[i-1] is x[i]:
            result += 1
            x[i] += 1
        elif x[i-1] > x[i]:
            result += (x[i-1]-x[i]) + 1
            x[i] = x[i-1] + 1
    print(x)
    return result


print("should out put 3") 
print(arrayChange([1,1,1]))