/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const row = board.length;
    const col = board[0].length;
    
    const callDFS = (r, c, id) => {
        if (word.length == id) return true;
        if (r >= row || r < 0 || board[r][c] != word[id]) return false;
        
        board[r][c] = '';
        
        if (
            callDFS(r+1, c, id+1) ||
            callDFS(r-1, c, id+1) ||
            callDFS(r, c+1, id+1) ||
            callDFS(r, c-1, id+1) 
           ) return true;
        
        board[r][c] = word[id];
    }
    
    
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if(board[r][c] == word[0] && callDFS(r, c, 0))  return true
        }
    }
    
    return false;
        
};