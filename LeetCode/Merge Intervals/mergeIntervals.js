/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = [];
    if(intervals.length < 2) return intervals
    
    
    intervals.sort((a, b) => {return a[0] - b[0]});
    //console.log(intervals)
    
    for(let i = 1; intervals.length > i; i++) {
        let prev = intervals[i-1];
        let curr = intervals[i];
        if(prev[1] >= curr[0]) {
            intervals[i] = [prev[0], Math.max(prev[1],curr[1])]
            intervals.splice(i-1,1)
            i -= 1
        } 
    }
    
    return intervals
};