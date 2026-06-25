// first version of the solution
/**
 * 
 * TC: O(N)
 * SC: O(N)
 * the Set also takes space relative to the input:
 * The Set: Takes O(J) space to store the unique jewel characters.
 *  (Note: Since the input is strictly English letters, you could technically argue it's bounded by O(1)
 * because there are at most 52 unique characters, but O(J) is the standard algorithmic answer).
 * The Array: stones.split('') creates a brand-new array of size S, taking O(S) space.Total SC: O(J + S).
 */

var numJewelsInStones = function(jewels, stones) {
    // stones => set => unique items
    // jewels => set
    const jewelsSet = new Set(jewels);
    let jewelCount = 0;
    // const stonesArr = stones.split('');
    // for(let i = 0; i<stonesArr.length; i++) {
    //     if(jewelsSet.has(stonesArr[i])) jewelsCount++;
    // }
    stones.split('').forEach((stone)=>{
        if(jewelsSet.has(stone)) jewelCount++;
    })
    return jewelCount;
    
};