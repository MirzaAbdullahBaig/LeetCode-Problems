// Problem NO: 2011 => Final Value of Variable After Perfoming Operations
// Link => https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

// Solved Link => https://leetcode.com/problems/final-value-of-variable-after-performing-operations/submissions/1249275370


const finalValueAfterOperations = (operations) => {
    let result = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "X++" || operations[i] === "++X") {
            result++;
        } else {
            result--;
        }

        // ternary operator
        // result += (operations[i] === "X++" || operations[i] === "++X") ? 1 : -1;
    };

    return result;
};