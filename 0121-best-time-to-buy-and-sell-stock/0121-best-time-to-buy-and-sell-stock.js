/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var firstPointer = 0;
    var secondPointer = 1;
    let maxPrice = 0;
    while (firstPointer < prices.length) {
        let priceDif = prices[secondPointer] - prices[firstPointer];
        if (priceDif > 0) {
            if (priceDif >= maxPrice) {
                maxPrice = priceDif;
            }
         ++secondPointer;           
        }
        else {
            firstPointer = secondPointer;
            secondPointer = secondPointer + 1;
        }
    }
    return maxPrice;
};