function transposeMatrix(matrix) {
    if (!matrix || matrix.length === 0) return [];

    const originalRows = matrix.length;
    const originalCols = matrix[0].length;
    const transposed = [];

    for (let j = 0; j < originalCols; j++) {
        const newRow = [];
        
        for (let i = 0; i < originalRows; i++) {
            newRow.push(matrix[i][j]);
        }
        
        transposed.push(newRow);
    }

    return transposed;
}

// O(N^2) TC, O(N^2) SC

/**
 * the most accurate WAY to put is:
 * TC = O(R × C)
    SC = O(R × C)
 */