/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s == "") return 0
    
    let count = 1;
    let currentCount = 0;
    let map =  new Map();
    
    for(let i = 0; s.length > i; i++ ){
        
        
        if(map.get(s[i]) >= currentCount ) {
            currentCount = map.get(s[i])+1
        }

        
        map.set(s[i], i)
        
        count = Math.max(i-currentCount+1, count)
    }
    // console.log(map)
    return count
};