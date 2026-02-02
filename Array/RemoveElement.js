const arr = [3, 2, 2, 3];

function removeElement(arr, val) {
    let k =0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] !== val){
            arr[k] = arr[i];
            k = k+1;
        }
    }
    return k;
}

const result = removeElement(arr, 3);
console.log(result);