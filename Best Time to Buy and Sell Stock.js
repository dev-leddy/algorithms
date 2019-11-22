/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minprice = Infinity;
    let maxprofit = 0;
    
    for(let i = 0; i < prices.length; i++)
        {
            let curr = prices[i];
            
            if(curr < minprice) 
            {
                minprice = curr;
            }
            else if (curr - minprice > maxprofit)
            {
                maxprofit = curr - minprice;
            }
        }
    return maxprofit;
};
