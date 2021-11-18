/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let prev = intervals[0];
    let remove = 0;

    for(let i = 1; i < intervals.length; i++) {
        if(prev[1] <= intervals[i][0]) {
            prev = intervals[i];
        } else {
            remove++;
        }
    }
    return remove;
};