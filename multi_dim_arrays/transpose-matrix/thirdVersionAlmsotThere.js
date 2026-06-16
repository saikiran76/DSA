function transposeMatrix(matrix) {
    for(let i = 0; i<matrix.length; i++) {
        if(matrix[i].includes(undefined)) matrix.pop(matrix[i]);
        for(let j = i+1; j<matrix.length; j++) {
          if (i === j) continue;
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // for(let i = 0 ; i<matrix.length; i++){
    //   if(matrix[i].includes(undefined)) matrix.pop(matrix[i]);
    // }
      

    return matrix;
}

/**
 * But for the test case, [[8, 6], [4, 2], [5, 9], [1, 3]]
 * Expected output: [[8,4,5,1],[6,2,9,3]]
 * Actual output: [[8,4,5,1],[6,2,9,3],[null,null]]
 */