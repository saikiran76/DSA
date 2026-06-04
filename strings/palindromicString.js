/**
 * @param {string} str
 * @return {string}
 */
function isPalindromeInPlace(str) {
    // Write your code here - inplace
    let i = 0;
    let j = str.length-1;
    // let isPal = false;
    while(i!=j && i<j){
        if(str[i] != str[j]) {
            return "No";
            // isPal = false;
            // break;
        // } else {
        //     isPal = true;
        // }
        }
        i++;
        j--;
    }
    
    return "Yes";
}

module.exports = { isPalindromeInPlace };