class Solution {
    distributeCandies(n, k, candies) {
        let cntMap = new Map();
        for(let i = 0; i<n; i++) {
            if(!cntMap.has(candies[i])) {
                cntMap.set(candies[i], 1)
            } else {
                cntMap.set(candies[i], cntMap.get(candies[i]) + 1)
            }
        }
        if(cntMap.size < k) {
            return 0;
        }

        let maxChild = 0;
        let s = 0;
        while(true) {
            for(const [key, val] of cntMap) {
                if(val>=1 && s<k) {
                    s+= 1;
                    cntMap.set(key, cntMap.get(key)-1);
                }
            }
            if(s===k) {
                maxChild += 1;
                s = 0;

            } else {
                break
            }
        }
        
        return maxChild;
    }
}

module.exports = Solution;
