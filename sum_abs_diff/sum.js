// helper.js (template)
class Solution {
  /**
   * @param {bigint[]} arr - array of integers as BigInt
   * @return {bigint} sum of absolute differences across all unordered pairs
   */
  sumOfAbsDiff(arr) {
    // Write your code here
    let sum = 0;
    for(let i = 0; i<arr.length; i++) {
      let diff = 0;
      for(let j = i+1; j<arr.length; j++) {
        diff = arr[i] - arr[j];
        sum += Math.abs(Number(diff));
      }
    }
    return sum;
  }
}

module.exports = { Solution };
