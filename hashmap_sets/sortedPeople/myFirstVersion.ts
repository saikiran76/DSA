function sortPeople(names: string[], heights: number[]): string[] {
    let pMap: any = new Map();
    for(let i = 0; i<names.length; i++) {
        if(!pMap.has(heights[i])) {
            pMap.set(heights[i], names[i])
        }
    }

    

    for(let i = 0; i<names.length; i++) {
        let max = Math.max(...heights.slice(i));
        let maxIdx = heights.indexOf(max);

        if(heights[i] < max) {
            const temp: string= names[i]
            const tempNum = heights[i];
            names[i] = pMap.get(max);

            names[maxIdx] = temp;
            heights[i] = max;
            heights[maxIdx] = tempNum; 
        }

    }
    
    // let i: number = 0;
    // for(const [key, value] of pMap) {
    //     let max = Math.max(...heights.slice(i));
    //     let maxIdx: number = heights.indexOf(max)
    //     if(Number(key) < max) {
    //         const temp: string= names[i]
    //         names[i] = pMap.get(max);
    //         names[maxIdx] = temp;
    //         i++;
    //         // max = Number(key);
    //     }
    //     i++;
    // }

    return names
    
};