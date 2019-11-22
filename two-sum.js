/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    //Create hashmap to track indexs
    let map = {};
    
    for(let i = 0; i < nums.length; i++)
        {                   
            //Find the complement to the current number
            let complement = target - nums[i];
                   
            //If we have encountered the current complement previously, that is our match
            if(complement in map)
            {
                let first = map[complement];
                let second = i;
                return [first,second];
            }
            
            //This loop didn't find a match, so lets add the number we encountered to the map with its value set to the index
            map[nums[i]] = i;

        }
};
