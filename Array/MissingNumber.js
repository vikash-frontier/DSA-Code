{
  /** 
    
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation:
n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
    
    */
}

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

// approach 1: Using Sorting

// function missingNumber(nums) {
//   let sortedNums = nums.sort((a, b) => a - b);
//   for (let i = 0; i <= sortedNums.length; i++) {
//     if (sortedNums[i] !== i) {
//       return i;
//     }
//   }
//   return sortedNums.length;
// }
// console.log(missingNumber(nums)); // Output: 2
// Time Complexity: O(n log n)
// Space Complexity: O(1)

// approach 2: Using HashSet
// function missingNumber(nums) {
//   let numSet = new Set(nums);
//   for (let i = 0; i <= nums.length; i++) {
//     if (!numSet.has(i)) {
//       return i;
//     }
//   }
//   return -1; // This line should never be reached
// }

// console.log(missingNumber(nums)); // Output: 8
// Time Complexity: O(n)
// Space Complexity: O(n)

// approach 3: Using Mathematical Formula

function missingNumber(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return expectedSum - sum;
}

console.log(missingNumber(nums)); // Output: 8
// Time Complexity: O(n)
// Space Complexity: O(1)
