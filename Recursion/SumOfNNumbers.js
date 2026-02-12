{
  /**

    sum of n numbers using recursion
    
*/
}

function sumOfNNumbers(num) {
  if (num === 0) return 0;

  // num = num + sumOfNNumbers(num - 1);
  return num + sumOfNNumbers(num - 1);
}

console.log(sumOfNNumbers(10));
