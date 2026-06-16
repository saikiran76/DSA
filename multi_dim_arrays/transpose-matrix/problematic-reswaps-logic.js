function transposeMatrix(matrix) {
    for(let i = 0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[i].length; j++) { // this re-iteration on every element causes re-swaps resulting in the same array again
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]; // no swap is happening, need to correct this
        }
    }

    return matrix;
}