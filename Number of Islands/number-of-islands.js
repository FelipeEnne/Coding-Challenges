/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numberIslands = 0;
    
    const changeGrid = (i,j) => {
        if(i < 0 || i > grid.length-1) return;
        if(j < 0 || j > grid[0].length-1) return;
        //console.log(`${i} ${j}`)
        if(grid[i][j] != "1") return;
        
        grid[i][j] = "0";
        
        changeGrid(i+1,j);
        changeGrid(i-1,j);
        changeGrid(i,j+1);
        changeGrid(i,j-1);
    }
    
    
    for(let i = 0; grid.length > i ; i++) {
        for(let j = 0; grid[0].length > j; j++){
            if(grid[i][j] == "1") {
                numberIslands ++;
                //console.log(grid)
                changeGrid(i,j)
            }
        }
    }
    return numberIslands
};
