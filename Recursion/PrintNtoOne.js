/**
 * Print numbers from N to 1 using recursion
 * @param {number} num - The starting number
 */

// function printNtoOne(num) {
//   if (num < 1) {
//     return;
//   }
//   console.log(num);
//   num = num - 1;
//   printNtoOne(num);
// }
// printNtoOne(5);

/**
 * Print numbers from 1 to N using recursion
 * @param {number} num - The starting number
 */
// function printOneToN(num, n) {
//   if (num > n) {
//     return;
//   }
//   console.log(num);
//   num = num + 1;
//   printOneToN(num, n);
// }

let x = 10;

function printOneToN(num) {
  if (num > x) return;
  console.log(num);
  num = num + 1;
  printOneToN(num);
}
printOneToN(1);
