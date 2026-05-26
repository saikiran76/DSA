// solution that works but only passes few test cases, need to optimize it further

var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let tracker = 0;
    if(nums.length === 1) {
        if(nums[0] === k) return 1;
        else return 0;
    }
    if(nums.length === 0) {
        return 0;
    }
    while(tracker<nums.length) {
        sum += nums[tracker];
        if(sum === k) {
            if (nums[tracker] === k) {
                count++;
            }
            count++;
            tracker++;
        }
        else if(sum < k) {
            if (tracker > 0) {
                if(nums[tracker] === k) {
                    count++;
                    tracker++
                }  else if((nums[tracker - 1] + nums[tracker]) === k) {
                  
                  count++;
                  tracker++;
                } else {
                  tracker++;
                }
              
            } else {
                tracker++;
            }
            
        } else {
            if(nums[tracker] === k) {
                count++;
                tracker++;
            } else if (tracker > 0 && nums[tracker - 1] + nums[tracker] === k) {
                count++;
                tracker++;
            } 
            
            else {tracker++;}
        }


    }
    return count;
};