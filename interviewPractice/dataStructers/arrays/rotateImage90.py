# not done...
# https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/


twoDMat = [[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]]

towD = [[10,9,6,3,7], 
        [6,10,2,9,7], 
        [7,6,3,8,2], 
        [8,9,7,9,9], 
        [6,8,6,8,2]]
# rotate90(twoDMat)


def rotate90(a):
    
    for i in range(len(a) -1):

        end = len(a)-1 -i

        for j in range(i, end):
            tempEnd = len(a) - 1 - j
            temp = a[i][j]
            a[i][j] = a[tempEnd][i]
            a[tempEnd][i] = a[end][tempEnd]
            a[end][tempEnd] = temp
        print(a)

    print("returning")
    print(a)
    return a
        

def rot(a):
    
    for i in range(len(a) -1):

        end = len(a)-1 -i

            
        store1 = a[i][end]
        store2 = a[end][end]
        store3 = a[end][i]

        a[i][end] = a[0][i]
        a[end][end] = store1
        a[end][i] = store2
        a[0][i] = store3
    
    print(a)

rot(towD)