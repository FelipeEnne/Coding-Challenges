/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = new Array(indices.length);
    
    for(let i = 0; indices.length > i; i++) {
        result[indices[i]] = s[i]
    }
    return result.join('')
};