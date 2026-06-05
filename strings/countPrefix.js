/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
function countPrefixMatch(words, pref) {
    // Write your code here
    let countPref = 0;
    for(let i = 0; i<words.length; i++) {
         if(words[i].startsWith(pref)){
            countPref += 1;
         }
    }
    return countPref;
    
}

module.exports = { countPrefixMatch };