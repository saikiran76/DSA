function transposeMatrix(matrix) {
    for(let i = 0; i<matrix.length; i++) {
        // if(matrix[i].includes(undefined)) matrix.pop(matrix[i]);
        for(let j = i+1; j<matrix.length; j++) {
          if (i === j) continue;
          // if(matrix[i].includes(undefined)) continue;
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    
    // if (matrix.some(row => row.every(cell => cell === undefined))) {
    //   matrix.pop();
    // }
    while (
    matrix.length &&
    matrix[matrix.length - 1].every(cell => cell === undefined)
    ) {
        matrix.pop();
    }
      

    return matrix;
}