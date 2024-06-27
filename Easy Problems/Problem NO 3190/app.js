// Problem NO: 3190 => Find minimum operations to make all elements by three
// Link => https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/


// First Solved Link Using For loop => https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/submissions/1301494893

const minimumOperations1 = (nums) => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i] / 3
        result += !Number.isInteger(num) ? 1 : 0
        // if (!Number.isInteger(num)) result++
    }
    return result
}


// Second Solved Link Using forEach => https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/submissions/1301500544

const minimumOperations2 = (nums) => {
    let result = 0;
    nums.forEach(number => {
        const num = number / 3
        result += !Number.isInteger(num) ? 1 : 0
    });
    return result
}


// Third Solved Link Using filter method => https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/submissions/1301513984

const minimumOperations3 = (nums) => {
    let result = nums.filter(number => !Number.isInteger(number / 3)).length;
    return result
}