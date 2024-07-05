// Problem NO: 121 => Best Time to Buy and Sell Stock
// Link => https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/


// 1st Method But not acceptable because time limit is exceeded || Brute force method
// this approach has a time complexity of 0(n2)

const maxProfit1 = (prices) => {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {  // Start j from i + 1
            if (prices[j] > prices[i]) {  // Ensure selling price is greater than buying price
                let profit = prices[j] - prices[i];  // Calculate profit
                if (profit > maxProfit) {
                    maxProfit = profit;  // Update maxProfit if current profit is greater
                }
            }
        }
    }

    return maxProfit;
};


// 2nd Method => solved Link => https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1310177066
// this approach has a time complexity of 0(n2)

const maxProfit2 = (prices) => {
    let maxProfit = 0;
    let minPrice = Infinity;  // Initialize to positive infinity

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];  // Update the minimum price encountered so far
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;  // Calculate profit and update maxProfit if it's higher
        }
    }

    return maxProfit;
};


// 3rd Method => solved Link => https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1310288118
// this approach has a time complexity of 0(n)

const maxProfit3 = (prices) => {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);  
    }
    return maxProfit;
}