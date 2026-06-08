/**
 * Check if two strings are anagrams of each other.
 * @param {string} s1 - First string
 * @param {string} s2 - Second string
 * @return {boolean} - true if anagrams, false otherwise
 */
function isAnagram(s1, s2) {
    // Your code here
    if(s1.length != s2.length) return false;

    // tracking out the characters and frequencies
    let h1 = {};
    for (let i = 0; i<s1.length; i++) {
        if(s1[i] in h1){
            h1[s1[i]] += 1
        } else {
            h1[s1[i]] = 1;
        }
    }
    let h2 = {};
    for (let j = 0; j<s2.length; j++) {
        if(s2[j] in h2) {
            h2[s2[j]] += 1;
        } else {
            h2[s2[j]] = 1;
        }
    }

    // got the frequencies, now time to check whethet hte keys are matching and their freqs
    const h1Keys = Object.keys(h1);
    for(let k = 0; k<h1Keys.length; k++) {
        if(!(h1Keys[k] in h2)) {
            return false;
        } 
    }

    let isAna = true;

    for(let n = 0; n<h1Keys.length; n++) {
        if(!(h1[h1Keys[n]] === h2[h1Keys[n]])) {
            isAna = false;
            break;
        }
    }

    // h1Keys.forEach((key) => {
    //     if(!(h1[key] === h2[key])) {
    //         isAna = false;
    //         return;

    //     }
    // })

    return isAna;

}

module.exports = { isAnagram };