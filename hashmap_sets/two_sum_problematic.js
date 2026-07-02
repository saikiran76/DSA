function twoSum(nums, target) {
    // Your code here
    let sumMap = new Map();

    // store the k-v's
    let result = [];
    for (let i = 0; i<nums.length; i++) {
        if(sumMap.has(nums[i])){
            // console.log(num)
            result.push(sumMap.get(nums[i]));
            result.push(i);
            break;
        }
        if(!sumMap.has(target-nums[i])) {
            sumMap.set(target-nums[i], i)

            // console.log(sumMap)

            
        }else{
            return [sumMap[target-nums[i]], i]

        }

    }

    return result;

    // return sumMap;
}

module.exports = { twoSum };