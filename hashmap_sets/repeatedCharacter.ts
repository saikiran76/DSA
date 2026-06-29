function repeatedCharacter(s: string): string {
    let trackObj: any = {};
    for(let i = 0; i<s.length; i++) {
        if (s[i] in trackObj){
            trackObj[s[i]]++ 
        } else {
            trackObj[s[i]] = 1;
        }

        // returning early
        if(trackObj[s[i]] === 2){
            return s[i];
        }
    }
    return ""

};