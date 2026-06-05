function capitalizeEnds(str) {
    // Write your code here
    if(str.length ===  1) {
        return !(str.charCodeAt(0) >= 65 && str.charCodeAt(0) <=90) ? String.fromCharCode(str.charCodeAt(0) - 32) : str;
    }
    const words = str.split(' ');
    let finalStr = '';
    
    words.forEach((word, idx) => {
        let start = word[0];
        let mid = word.slice(1, word.length - 1);
        let end = word[word.length - 1];

        if (!(start.charCodeAt(0) >= 65 && start.charCodeAt(0) <=90)) {
            // if not upper
            start = String.fromCharCode(start.charCodeAt(0) - 32);
        }

        if (!(end.charCodeAt(0) >= 65 && end.charCodeAt(0) <=90)){
            end = String.fromCharCode(end.charCodeAt(0) - 32);
        }

        
        finalStr += (start + mid + end + " ");

    })

    return finalStr;

    // let start = str[0];
    // let mid = str.slice(1, str.length-1);
    // let end = str[str.length - 1];

    

}