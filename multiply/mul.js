class Solution {
  /**
   * @param {number[]} arr
   * @returns {number[]} updated array
   */
  multiplyPrevNext(arr) {
    // Write your logic here
    if(arr.length === 2) {
      let temp = arr[0];
      arr[0] = arr[0]*arr[1];
      arr[1] = arr[1]*temp;

      return arr;
    }
    let tempF = arr[0];
    arr[0] = arr[0] * arr[1];

    let tempL = arr[arr.length - 1];
    arr[arr.length - 1] = arr[arr.length - 2]*arr[arr.length - 1];

    for(let i = 1; i < arr.length - 1; i++) {
      if (i === arr.length - 2){
        arr[i] = tempF*tempL;
        break;
      }
      let temp = arr[i];
      arr[i] = tempF*arr[i+1];
      tempF = temp;
    }
    return arr;
  }
}