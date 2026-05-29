class Solution {
    minAddForBalance(arr) {
        // Write your code here
        let mid = arr.length/2;

        //left sum
        let ls = 0;
        for(let i = 0; i<mid; i++) {
            ls += arr[i];

        }

        let rs = 0;
        for(let i = mid; i<arr.length; i++){
            rs += arr[i];
        }

        const diff = Math.abs(ls - rs);

        return diff;

    }
}

module.exports = { Solution };
