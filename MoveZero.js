{
  /**

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 
    
    */
}

let nums = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
  let x = 0; // Pointer for the position to place the next non-zero element
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}
console.log(moveZeroes(nums)); // Output: [1, 3, 12, 0, 0]

// Time Complexity: O(n)
// Space Complexity: O(1)

// function moveZeroes(nums) {
//   const nonZero = nums.filter((n) => n !== 0);
//   const zeros = Array(nums.length - nonZero.length).fill(0);
//   return [...nonZero, ...zeros];
// }

// Time Complexity: O(n)
// Space Complexity: O(n)
