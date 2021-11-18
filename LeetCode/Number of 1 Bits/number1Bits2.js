/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    toS = n.toString(2)
    result = 0
    
    for(let i = 0; toS.length > i; i++) {
        if( toS[i] == '1'){
            result += 1
        }
    }
    
    
    return result
};