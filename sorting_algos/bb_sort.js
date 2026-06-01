function bubbleSort(arr) {
    // Outer loop tracks how many elements are already sorted at the end
    for (let i = 0; i < arr.length; i++) {
        
        // Inner loop always starts at 0 and goes up to the unsorted boundary
        for (let j = 0; j < arr.length - 1 - i; j++) {
            
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap them
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


module.exports = { bubbleSort };