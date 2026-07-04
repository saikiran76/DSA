/**
 * 
 * @param s Funny thing is that the problem has been already solved
 * yet stuggled to solve it after days. Fuck!
 * @returns 
 */

function repeatedCharacters(s: string): string {
    let trackObj: any = {};
    for(let i = 0; i<s.length; i++) {
        if (s[i] in trackObj){
            trackObj[s[i]]++ 
        } else {
            trackObj[s[i]] = 1;
        }

        // returning early
        if(trackObj[s[i]] === 2){
            console.log(trackObj)
            return s[i];
        }
    }
    return ""

};
