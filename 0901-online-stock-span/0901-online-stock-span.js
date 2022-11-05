
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let curSpan = 1;
    let tempVal;
    while(this.stack.length && price >= this.stack[this.stack.length - 1].price){
        tempVal = this.stack.pop();
        curSpan += tempVal.span;
    }
    this.stack.push({price:price,span:curSpan});
    return curSpan;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */