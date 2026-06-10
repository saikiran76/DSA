  // helper.js (template)
  function countAsterisks(s) {
    // Write your logic here
    // let count = 0;
    // let inside = false
    // for(let i = 0; i<s.length; i++) {
    //   if(s[i] === '|') {
    //     inside = true;
    //   } else if (s[i] === '*' && !inside) {
    //     inside = false;
    //     count++;
    //   }
    // }

    // return count;

    let inside = false;
    let count = 0;

    for (const ch of s) {
        if (ch === '|') {
            inside = !inside;
        } else if (ch === '*' && !inside) {
            count++;
        }
    }


    
    // if(!(s.includes('|'))) {
    //   let astCount = 0;
    //   for(let i = 0; i<s.length; i++) {
    //     if(s[i] === '*') astCount+=1;
    //   }

    //   return astCount;
    // }
    // let astCount = 0;
    // let stPointer = 0;
    // // let endPointer = 1;
    // // // let i = 0;
    // while(endPointer < s.length - 1 && stPointer < endPointer && stPointer < s.length) {
    //   if(s[stPointer] === '|'){
    //     endPointer = (stPointer + 1);
    //     while(s[endPointer] !== '|' && endPointer < s.length - 1) {
    //       if(s[endPointer] === '*') astCount--;
    //       endPointer++;
    //     }
    //     stPointer = endPointer;
    //     endPointer += 1;
    //   } else {
    //     if(s[stPointer] === '*') {
    //       astCount += 1;
    //     }
    //     stPointer++;
    //     endPointer++;
    //   }
    // }
  
    return count;
  }

  module.exports = { countAsterisks };
