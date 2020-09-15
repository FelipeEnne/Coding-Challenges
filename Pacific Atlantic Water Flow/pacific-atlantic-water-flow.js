/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    let m = matrix.length;
    let n = m ? matrix[0].length : 0;
    if(!m || !n) return [];


    const spread = (i,j,ocean) => {
        const val = matrix[i][j]
        backFlow(i - 1,j,ocean,val);
        backFlow(i + 1,j,ocean,val);
        backFlow(i, j - 1,ocean,val);
        backFlow(i, j + 1,ocean,val);
    }

    const backFlow = (i,j,ocean,val) => {
        if (i < 0 || i >= m || j < 0 || j >= n || ocean[i][j]) return;
        if (matrix[i][j] >= val) {
            ocean[i][j] = true;
            spread(i,j,ocean);
        }
    }

    let canFlowToPacific = [];
    for (let i = 0; i < m; i++) canFlowToPacific.push([true]);
    for (let i = 0; i < n; i++) canFlowToPacific[0][i] = true;
    //console.log(canFlowToPacific);
    for (let i = 0; i < m; i++) spread(i, 0, canFlowToPacific);
    for (let i = 0; i < n; i++) spread(0, i, canFlowToPacific);
    //console.log(canFlowToPacific);
    
    let canFlowToAtlantic = [];
    for (let i = 0; i < m; i++) canFlowToAtlantic.push([]), canFlowToAtlantic[i][n - 1] = true;
    for (let i = 0; i < n; i++) canFlowToAtlantic[m - 1][i] = true;
    for (let i = 0; i < m; i++) spread(i, n - 1, canFlowToAtlantic);
    for (let i = 0; i < n; i++) spread(m - 1, i, canFlowToAtlantic);
    //console.log(canFlowToPacific);
    
    let result = [];
    
    
    for (let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (canFlowToAtlantic[i][j] && canFlowToPacific[i][j]) {
                result.push([i , j]);
            }
        }
    }
    
    
    return result;
};