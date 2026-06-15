function diagonalSum(mat) {
    // Write your logic here
    let sum = 0
    // len = mat.length;
    // mid = Math.floor(mat.length/2);
    // let midSkip = true; // true by default for odd cases
    // if(mat.length % 2 === 0) midSkip = true;

    // diagonal sum computation
    // let endP = mat.length - 1;
    const len = mat.length;
    // const lenEach = mat[0].length;
    // let inner = 0, endP = 0;
    for(let i = 0, endP = mat[i].length - 1; i<len && endP>=0; i++, endP--) {
      if(i === endP){
        sum += mat[i][i];
        continue;
      }
      sum += (mat[i][i] + mat[i][endP]);
      // endP--;
      
      
        // for(let j = 0, endP = mat.length - 1; j <lenEach && endP >= 0; j++, endP--){
        //     if(j === endP){
        //         sum += mat[i][i];
        //         continue;
        //     }
        //     sum += (mat[i][i] + mat[i][endP]);
        //     break;
            
        // }
    }

    // secondary diaognal sum computation
    // for(let k = 0; k < mat.length; k++) {
    //     for(let m = mat[k].length - 1; m>=0; m--) {

    //     }
    // }
    return sum;
    
}

module.exports = { diagonalSum };