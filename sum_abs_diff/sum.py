def sum_abs_diff(arr):
    sum = 0 
    # 0= < i < j
    for i in range(0, len(arr)-1): 
        for j in range(i+1, len(arr)):
            diff = arr[i] - arr[j]
            sum += abs(diff)
    return sum

print(sum_abs_diff([1, 2, 3, 4, 5]))
print(sum_abs_diff([-1, 3, -2, 5]))
