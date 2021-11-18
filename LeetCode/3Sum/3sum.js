/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
      if(!arr.includes(this[i])) {
          arr.push(this[i]);
      }
  }
  return arr; 
}

var threeSum = function(nums) {
    result = [];

    nums = nums.sort(function(a, b){return a - b});

    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue;

        y = i+1;
        z = nums.length-1;

        while(y < z){
            sum = nums[i] + nums[y] + nums[z];

            if(sum < 0){
                y+=1
            }else if(sum > 0){
                z-=1
            }else{

                result.push([nums[i], nums[y], nums[z]]);
                y++;
                z--;
            }
        }
    }
    //console.log(Array.from(new Set(result.map(JSON.stringify)), JSON.parse))
    return Array.from(new Set(result.map(JSON.stringify)), JSON.parse)
};