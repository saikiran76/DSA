/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let lCol, rCol, row = -1;
    for(let i = 0; i<matrix.length; i++) {
        // let replace = false;
        // let lock = false;
        let l = 0, r = matrix[i].length-1;   
        while(l<=r && row !== i) {
            if(matrix[i][l] === 0 && l !== lCol ) {
                // row replacement
                for(let j = 0; j<matrix[i].length; j++) {
                    matrix[i][j] = 0;
                }
                row = i;

                //column replacement
                for(let k = 0; k<matrix.length; k++) {
                    matrix[k][l] = 0;
                }
                lCol = l;
            }
            if (l !== r){
                if(matrix[i][r] === 0 && r !== rCol) {
                if(i !== row) {
                  // no need to repeat
                    for(let j = 0; j<matrix[i].length; j++) {
                        matrix[i][j] = 0;
                    }
                    
                    row = i;
                  }
                    //column replacement
                    for(let k = 0; k<matrix.length; k++) {
                        matrix[k][r] = 0;
                    }
                    rCol = r;
                
            }

            }
            
            l++; r--;
        }
    }

    
};

module.exports = { setZeroes }; 