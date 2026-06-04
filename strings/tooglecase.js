/**
 * @param {string} str
 * @return {string}
 */
function toggleCase(str) {
    // Write your code here
    // casing can be found out using ASCII values
    /**
     * when ASCII value of a character - range: [65, 90] => Uppercase
     * >= 97 (betweeen [97, 122]) => lowercase
     * 
     */
    let toggledStr = '';
    for(let i = 0; i<str.length; i++) {
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <=90){
            // upper. So make it lower!
            toggledStr += String.fromCharCode(str.charCodeAt(i) + 32)
        }
        // } else if (str.charCodeAt(i) <= 57 && str.charCodeAt(i) >= 48) {
        //     // number characters, leave them as is!
        //     toggledStr += str[i];

        // } else if (str.charCodeAt(i) >= 33 && str.charCodeAt(i) <= 47) {
        //     //  Math and punctuation symbols
        //     toggledStr += str[i];

        // } else if(str.charCodeAt(i) >= 58 && str.charCodeAt(i) <= 64) {
        //     // comparison symbols, leave them as is!
        //     toggledStr == str[i];
        // }
        else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            // lower. Make it upper
            toggledStr += String.fromCharCode(str.charCodeAt(i) - 32)
        } else {
            // any other character
            toggledStr += str[i];
        }
    }
    return toggledStr
}

module.exports = { toggleCase };