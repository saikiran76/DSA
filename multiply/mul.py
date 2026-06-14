
def mul(arr):
    start = arr[0]
    end = arr[len(arr)-1]
    arr[0] = arr[0]*arr[1]
    # arr[len(arr)-1] = arr[len(arr)-1]*arr[len(arr)-2]
    for p in range(1, len(arr)):
        if(p == len(arr)-1):
            arr[p] = start*arr[p]
            break
        temp = arr[p]
        arr[p] = start*arr[p+1]
        start = temp
    return arr

print(mul([1, 2, 3, 4, 5]))

