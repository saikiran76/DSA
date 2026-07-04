/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    // failing the test case: "aabbbbbccddeeffa"
    let charSet = new Map();
    for(let i = 0; i <s.length; i++) {
        let char = s.charAt(i);
        if (charSet.has(char)) {
            const currStr = charSet.get(char);
            const before = currStr.slice(0, currStr.indexOf(' '));
            const after = currStr.slice(currStr.indexOf(' '), currStr.length);
            charSet.set(char, String(Number(before) + 1) + after +`${i}`);

        } else {
            charSet.set(char, `1 ${i}`);
        }
    }

    // grab the formatted string with the minimum relative diff of the indices
    let finalChar = '';
    // const val = charSet.get(s.charAt(0));
    // const sliced = val.slice(" ", val.length)
    let relDiff = Infinity;
    for(const [k, v] of charSet) {
        const sliced = v.slice(" ", v.length)
        

        if(Number(v.charAt(0)) >=2) {
            // relDiff = Math.min(Number(sliced[1]) - Number(sliced[0]), relDiff);
            if (Number(sliced[1]) - Number(sliced[0]) < relDiff) finalChar = k;
            
            
        }
    }




    return finalChar;
};