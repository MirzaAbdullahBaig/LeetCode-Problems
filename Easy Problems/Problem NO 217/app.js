// Problem NO: 217 => Contains Duplicate
// Link => https://leetcode.com/problems/contains-duplicate/description/

// Solved Link => https://leetcode.com/problems/contains-duplicate/submissions/1249316465


const containsDuplicate = (nums) => {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};