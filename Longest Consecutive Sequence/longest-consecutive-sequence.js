/**
 * @param {number[]} nums
 * @return {number}
 */
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var longestConsecutive = function(nums) {
    nums.sort((a, b) =>  a - b)
    count = 0;
    nums = nums.filter( onlyUnique )
    
    //console.log(nums)
    
    for(let i = 0; nums.length > i; i++) {
        currentCount = 1;
        currentIndex = i;
        
        while(nums[currentIndex]+1 == nums[currentIndex+1] ) {
            currentCount += 1;
            currentIndex += 1;
        }
        count = Math.max(count, currentCount);
    }
    
    
    return count
};