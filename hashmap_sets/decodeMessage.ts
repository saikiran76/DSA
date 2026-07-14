function decodeMessage(key: string, message: string): string {
    let alphaMap = new Map()
    let alphaIdx: number = 97;
    let keyIdx: number = 0;
    // let decodedStr = '';
    for(let i = 0; i < key.length && alphaIdx <=122; i++) {
        if(key.charAt(i) !== ' ' && !alphaMap.has(key.charAt(i))){
            alphaMap.set(key.charAt(i), String.fromCharCode(alphaIdx));
            alphaIdx++;
        }
        
       
    }
    for(let i = 0; i<message.length; i++) {
        if(alphaMap.has(message.charAt(i))) {
            message = message.slice(0, i) + alphaMap.get(message.charAt(i)) + message.slice(i + 1);
        }
    }

    return message;

    
};