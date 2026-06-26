var checkIfPangram = function(sentence) {
    if (sentence.length < 26) return false;
    // bitmap - frequency
    // cosnt bitmap = new Array(122).fill(0);
    // sentence = sentence.toLowerCase();
    // for(let i = 0; i<bitmap.length; i++) {
    //     // lower
    //     bitmap[sentence.charCodeAt(i) - 97] = bitmap[sentence.charCodeAt(i) - 97] + 1;
    // }
    const senSet = new Set(sentence.split(""));
    if (senSet.size === 26) {
        return true;
    }
    
    return false;

    
};