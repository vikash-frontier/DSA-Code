{
  /***

    Find the sum of given array using recursion
    
*/
}

function sumOfArray(arr, n) {
  if (n === 0) return arr[0];
  return arr[n] + sumOfArray(arr, n - 1);
}

let arr = [1, 2, 3, 4, 5];

console.log(sumOfArray(arr, arr.length - 1));
