/**
 * @param {string} str
 * @return {void} - print ['a: 2', 'b: 1']
 */
function characterFrequency(str) {
    // Write your code here
    let bitMap = new Array(126).fill(0);

    for(let i = 0; i<str.length; i++) {
        const ascii = str.charCodeAt(i);
        bitMap[ascii - 97] = bitMap[ascii - 97] + 1;
        // if(ascii >= 97 && ascii <=122) {
        //     // lower
        //     bitMap[ascii - 97] = bitMap[ascii - 97] + 1;
            
        // } else {
        //     bitMap[ascii - 65] = bitMap[ascii - 65] + 1; 
        // }
    }

    // for(let j = 0; j<str.length; j++) {
    //     const ascii = str.charCodeAt(j);
    //     if (ascii >= 97 && ascii <= 122) {
    //         console.log(str[j] + ": " + bitMap[j + 97])

    //     } else {
    //         console.log(str[j] + ": " + bitMap[j + 65])
    //     }
        
    // }

    for(let j = 0; j<bitMap.length; j++) {
        if(bitMap[j] > 0) { console.log(String.fromCharCode(j+97)+": "+bitMap[j]);}
        
    }


}

module.exports = { characterFrequency };