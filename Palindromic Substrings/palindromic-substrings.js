/**
 * @param {string} s
 * @return {number}
 */

 
 
var countSubstrings = function(s) {
    let count = 0;

    const counterSubstring = (s, low, high) => {
        while( low >= 0 && high <= s.length && s[low]===s[high]) {
            count += 1;
            low -= 1;
            high += 1;
        }
    }

    for(let i = 0; i < s.length; i++) {
        counterSubstring(s, i, i);
        counterSubstring(s, i, i+1)
    }

    return count
};