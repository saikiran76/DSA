function isHappy(n) {
   let trackSet = new Set();
   let numberStr = String(n);
   let numSum;
    while(numberStr) {
      // if(sum === 1) return true;
      // if(trackSet.has(sum)) return false; // to avoid infinite loop
      if(numSum === 1) return true;
       // cycle resets, so stop!
      let sum = 0;
      let currPoint = 0;
      while(currPoint < numberStr.length) {
          if(currPoint === numberStr.length-1){
            sum += Math.pow(Number(numberStr[currPoint]), 2);
            if(!(trackSet.has(sum))) {
              trackSet.add(sum)
            } else {
              return false;
            }
            numSum = sum;
            numberStr = String(sum);
            // sum = 0;
            // i = 0;
            break;
          }
          sum += Math.pow(Number(numberStr[currPoint]), 2);
          currPoint ++;
        }
      
      // sum += Math.pow(Number(numberStr[i]), 2);
    }
   return false;
}
