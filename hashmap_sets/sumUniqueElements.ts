function sumOfUnique(nums: number[]): number {
    let numMap = new Map();
    let uniqueSum: number = 0;
  
    for(let i = 0; i<nums.length; i++) {
        if(numMap.has(nums[i])){
            numMap.set(nums[i], numMap.get(nums[i])+1);
        } else {
            numMap.set(nums[i], 1);
        }
    }

    for (const [key, value] of numMap) {
        if(value === 1) {
            uniqueSum += Number(key);
        }
    }
    
    return uniqueSum;
};