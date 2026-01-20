function secondLargestNumber(arr) {

    if(arr.length < 2) {
        return -1;
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > firstLargest){
            secondLargest=firstLargest;
            firstLargest= arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest= arr[i];
        }
    }
    return secondLargest === -Infinity ? -1 : secondLargest;
}


const arr = [10,5,10, 7];
const result = secondLargestNumber(arr);
console.log(result);