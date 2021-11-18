/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let first = 0
    let last = height.length -1
    let result = -1
    
    while(last > first){
        let area = (last-first)*(Math.min(height[first], height[last]));
        if(area > result){
            result = area
        }
        
        if(height[first] < height[last]){
            first++;
        } else {
            last--;
        }
    }
    return result;
};