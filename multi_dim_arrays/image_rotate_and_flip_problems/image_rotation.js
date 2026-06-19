// inplace solution wrt matrix using hashmap but new space is created which is hashmap: O(m*n) space

/**
 * TC: O(N^2)
 * SC:
 * 
 */
function rotate(matrix) {
    // transpose and flip the rows
    let hmap = {};
    let cP = matrix[0].length - 1;
    for(let i = 0; i<matrix.length; i++){
      let fixP = 0;
      for(let j = 0; j<matrix[i].length; j++){
        // hmap[matrix[i][j]] = [fixP, cP];
        hmap[[fixP, cP]] = matrix[i][j];
        fixP++;
        
      }
      cP--;
      
    }
    
    // return hmap;

    // place the elements in the position
    for(let i = 0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[i].length; j++) {
            matrix[i][j] = hmap[[i, j]];
        }
    }

    return matrix;
    
    
}


module.exports = rotate;