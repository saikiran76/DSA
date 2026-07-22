// 290. Word Pattern (leet code)

function wordPattern(pattern: string, s: string): boolean {
    const words: string[] = s.split(' ')
    if(pattern.length !== words.length) {
        return false
    }

    const wordMap = new Map();
    
    for(let i = 0; i<words.length; i++) {
        if(!wordMap.has(words[i])) {
            wordMap.set(words[i], pattern[i])
        }
    }
    const patternMap = new Map();
    for(let i = 0; i<pattern.length; i++) {
        if(!patternMap.has(pattern[i])) {
            patternMap.set(pattern[i], words[i])
        }
    }

    if(wordMap.size !== patternMap.size){
        return false;
    }

    let mark = false;
    let contIdx = patternMap.size;

    for(let [k, v] of wordMap) {
        if(patternMap.has(v)){
            if(k === patternMap.get(v)) {
                mark = true;
            } else {
                mark = false;
            }

        } else {
            mark = false;
            break;

        }

    }

    while(contIdx < words.length) {
        if(!wordMap.has(words[contIdx])) {
            mark = false
        } else {
            if(wordMap.get(words[contIdx]) !== pattern[contIdx]) {
                mark = false
            }
        }

        contIdx++;

    }



    return mark;

    

};

/**
 * Statistics 
 * 
 * Runtime 0 ms
   Beats 100.00%
   
   Memory 53.75 MB
   Beats 90.49%

 */