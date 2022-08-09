let divideNumArray = [];
let numOp;
function divideNum(num) {
    while(num != 0)
    {
    numOp = num % 10;
    divideNumArray.push(numOp);
    num = parseInt(num / 10);
    }
    return divideNumArray.reverse();
}

console.log(divideNum(10));