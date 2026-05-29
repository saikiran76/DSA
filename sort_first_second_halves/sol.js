// helper.js

class Solution {

    sortAsc(arr, mid) {
        // let smallIdx = 0;
        for(let smallIdx = 0; smallIdx < mid; smallIdx++){
            for(let i = smallIdx+1; i<mid; i++) {
                if(arr[i] < arr[smallIdx]) {
                    let temp = arr[smallIdx];
                    arr[smallIdx] = arr[i];
                    arr[i] = temp; 
                }
            }

        }
        
        return arr;
    }

    sortDesc(arr) {
        // if(arr.length % 2 === 0) {

        // }
        for(let largeIdx = 0; largeIdx < arr.length; largeIdx++){
            for(let i = largeIdx+1; i<arr.length; i++) {
                if(arr[i] > arr[largeIdx]) {
                    let temp = arr[largeIdx];
                    arr[largeIdx] = arr[i];
                    arr[i] = temp; 
                }
            }

        }
        return arr;
    }

    sortHalves(arr) {

        // write your code here
        let mid = Math.floor(arr.length/2);
        arr.splice(0, mid, ...this.sortAsc(arr.slice(0, mid), mid));
        arr.splice(mid, arr.length - mid, ...this.sortDesc(arr.slice(mid, arr.length)));

        return arr;
    }

}

module.exports = Solution;