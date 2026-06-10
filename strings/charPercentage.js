class Solution {
  /**
   * @param {string} s
   * @param {string} letter
   * @returns {number}
   */
  percentageLetter(s, letter) {
    // Write your code here
    if(s.length === 0) {
      return 0;
    }
    if(s.length === 1) {
      if (letter === s) {
        return 100;
      } else {
        return 0;
      }
    }
    const letterMap = {};
    for(let i = 0; i<s.length; i++) {
      if(s[i] === letter) {
        if(s[i] in letterMap){
          letterMap[s[i]] += 1;

        } else {
          letterMap[s[i]] = 1;
        }

      } 
    }

    const count = letter in letterMap ? letterMap[letter] : 0;
    return count === 0 ? 0 : Math.floor((count/s.length)*100); 

  }
}

module.exports = { Solution };

/**
 * Task:
 * Write the simple counter based approach for the problem
 */