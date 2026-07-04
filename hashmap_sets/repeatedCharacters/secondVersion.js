var repeatedCharacter = function(s) {
    // let charSet = new Map();
    // for(let i = 0; i <s.length; i++) {
    //     let char = s.charAt(i);
    //     if (charSet.has(char)) {
    //         const currStr = charSet.get(char);
    //         const before = currStr.slice(0, currStr.indexOf(' '));
    //         const after = currStr.slice(currStr.indexOf(' '), currStr.length);
    //         charSet.set(char, String(Number(before) + 1) + after +`${i}`);

    //     } else {
    //         charSet.set(char, `1 ${i}`);
    //     }
    // }

    // grab the formatted string with the minimum relative diff of the indices
    // let finalChar = '';
    // const val = charSet.get(s.charAt(0));
    // const sliced = val.slice(" ", val.length)
    // let relDiff = Infinity;
    // for(const [k, v] of charSet) {
    //     const sliced = v.slice(v.indexOf(" ")+1, v.length)
    //     console.log("indices: " + sliced);
    //     console.log(Number(sliced[1]) - Number(sliced[0]));
        

    //     if(Number(v.charAt(0)) >=2) {
    //         // relDiff = Math.min(Number(sliced[1]) - Number(sliced[0]), relDiff);
    //         // console.log('k: ' + k + "relative diff: "+ String(relDiff))
    //         if (Number(sliced[1]) - Number(sliced[0]) < relDiff) {
    //             finalChar = k;
    //             relDiff = Number(sliced[1]) - Number(sliced[0]);
    //         };
            
            
    //     }
    // }

    const occMap = new Map();
    let finalChar = '';
    let diff = Infinity;

    for (let i = 0; i<s.length; i++) {
        if(occMap.has(s.charAt(i))) {
            occMap.get(s.charAt(i)).push(i)
        } else {
            occMap.set(s.charAt(i), [i]);
        }
    }
    
    for(const [k, v] of occMap) {
        if(v.length >=2) {
            console.log('the rel diff of occurance: ', v[1] - v[0])
            if( v[1] - v[0] < diff ) {
                diff = v[1] - v[0]
                finalChar = k;
            }

        }
    }

    console.log(occMap);

    return finalChar;
}