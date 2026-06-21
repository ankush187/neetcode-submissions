class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        let minTillNow = Infinity;
        prices.forEach(item => {
            minTillNow = Math.min(minTillNow, item);
            const profit = item - minTillNow;
            if(maxProfit < profit) {
                maxProfit = profit;
            }
        })

        return maxProfit;
    }
}
