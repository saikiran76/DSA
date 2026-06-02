function selectionSort(arr) {
    // Write your logic here
    const n = arr.length;
    // let min = 0;
    for(let i = 0; i<n-1; i++) {
        let min  = i;
        for(let j = i+1; j<n; j++){
            if(arr[j] < arr[min]) min = j;
        }
        // swap
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;

    }
    
}