class Solution {
    kthDistinct(arr, k) {
        // Implement your code here
        let freqMap = new Map();
        for(let i = 0; i<arr.length; i++) {
            if(!freqMap.has(arr[i])) {
                freqMap.set(arr[i], 1)
            } else {
                freqMap.set(arr[i], freqMap.get(arr[i])+1)
            }
        }
        let cnt = 0;
        let retStr = '';
        for(const [key, val] of freqMap) {
            if (cnt === k) {
                break;
            }
            if (val === 1) {
                retStr = key;
                cnt++;
            }
            
        }
        if(cnt < k) {
            return 'None';
        }
        return retStr;
    }
}

module.exports = Solution;
