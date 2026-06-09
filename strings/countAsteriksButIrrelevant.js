// helper.js (template)
function countAsterisks(s) {
  // Write your logic here
  // let resetBounds = false;
  // checking whether there are '|' or not, else quit early
    // for(let i = 0; i<s.length; i++) {
    //   if(s[i] === '|')
    // }
  if(!(s.includes('|'))) {
    let astCount = 0;
    for(let i = 0; i<s.length; i++) {
      if(s[i] === '*') astCount+=1;
    }

    return astCount;
  }
  let astCount = 0;
  let stPointer = 0;
  let endPointer = 1;
  // let i = 0;
  while(endPointer < s.length - 1 && stPointer < endPointer && stPointer < s.length) {
    if(s[stPointer] === '|'){
      endPointer = (stPointer + 1);
      while(s[endPointer] !== '|' && endPointer < s.length - 1) {
        if(s[endPointer] === '*') astCount += 1;
        endPointer++;
      }
      stPointer = endPointer;
      endPointer += 1;
    } else {
      stPointer++;
      endPointer++;
    }
  }
  // for(let i = 0; i<s.length; i++) {
  //   if(s[i] === '|') {
  //     resetBounds = true;
  //   } 

  //   if(resetBounds && s[i] === '*') {
  //     count += 1;
  //   }

  // }
  return astCount;
}

module.exports = { countAsterisks };
