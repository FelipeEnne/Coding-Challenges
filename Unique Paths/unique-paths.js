/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 0 && n === 0) {
        return 0
    }
    if (m === 0 || n === 0) {
        return 1
    }
    
    let arr = []
    
	// initial the first column
    for (let i = 0; i < m; i++) {
        arr[i] = [1]
    }
    
	// initial the first row data
    for (let i = 1; i < n; i++) {
        arr[0].push(1)
    }
    
	// the rest of table, will be calculate by, top + left
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
        }
    }
    
    return arr[m - 1][n - 1]
};