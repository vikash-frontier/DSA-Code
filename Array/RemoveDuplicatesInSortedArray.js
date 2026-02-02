const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5,];

function removeDuplicates(arr) {
    let k = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[k]){ // Or arr[i] > arr[k]
            k = k + 1;
            arr[k] = arr[i];
        }
    }
    return k + 1;
}

let result = removeDuplicates(arr);
console.log(result);