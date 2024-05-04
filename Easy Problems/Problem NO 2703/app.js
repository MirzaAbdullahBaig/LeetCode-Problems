// Problem NO: 2703 => Return Length of Arguments Passed
// Link => https://leetcode.com/problems/return-length-of-arguments-passed/description/

// Solved Link => https://leetcode.com/problems/return-length-of-arguments-passed/submissions/1249036333


function argumentsLength (...args) {
    return args.length;
};

console.log(argumentsLength(2, 4, "dsdsd", true));