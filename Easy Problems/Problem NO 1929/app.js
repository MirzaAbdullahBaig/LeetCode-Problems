// Problem NO: 1929 => Concatenation of array
// Link => https://leetcode.com/problems/concatenation-of-array/description/

// Solved Link => https://leetcode.com/problems/concatenation-of-array/submissions/1256835287


const getConcatenation = (nums) => {
    let temp_arr = []

    for (let i = 0; i < nums.length; i++) {
        temp_arr.push(nums[i])
        if (i === nums.length - 1) {
            for (let j = 0; j < nums.length; j++) {
                temp_arr.push(nums[j])
            }
        }
    }
    return temp_arr
};