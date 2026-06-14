## For practise, when revising on weekly basis rewrite the code here

class solution:
    def rev_ktimes(self, arr, k):
        n = len(arr)
        k %= n

        def rev(l, r):
            while(l < r):
                arr[l], arr[r] = arr[r], arr[l]
                l += 1
                r -= 1
        
        rev(0, n-1)
        rev(0, k-1)
        rev(k, n-1)

        return arr



sol_obj = solution()

print(sol_obj.rev_ktimes([1, 2, 3, 4, 5, 6, 7], 3))