function transposeMatrix(matrix) {
    for(let i = 0; i<matrix.length; i++) {
        for(let j = i+1; j<matrix[i].length; j++) {
          if (i === j) continue;
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    return matrix;
}

/**
 * ANd yet, this transpose logic still doesnt work on non-square matrices
 * 
 * If you thought if its already booyah, then its boooo! 👎
 * 
 * It just passes the test cases for the non-square matrices
 * 
 */