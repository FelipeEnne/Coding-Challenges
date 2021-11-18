/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    
    while( left+1 < right) {
        let middle = Math.floor(left + (right-left)/2);

        let square = middle * middle;
        
        if( square == x){
            return middle;
        } else if( square > x){
            right = middle;
        } else{
            left = middle;
        }

    }
    
    if( right*right == x){
        return right;
    } else {
        return left;
    }
    
    
};