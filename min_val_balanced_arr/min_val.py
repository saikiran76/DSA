def min_val(arr):
    '''
    Given the even sized array, verify the balance and return the balance weight
    '''
    mid = int(len(arr)/2)
    sum_left = 0
    for i in range(0, mid):
        sum_left += arr[i]
    sum_right = 0
    for j in range(mid, len(arr)):
        sum_right += arr[j]
    if sum_left == sum_right:
        return 0
    else:
        # if(sum_right > sum_left):
        #     diff = sum_right - sum_left
        return abs(sum_right - sum_left) 

print(min_val([1, 2, 1, 2, 1, 3]))
print(min_val([2, 2, 2, 2]))