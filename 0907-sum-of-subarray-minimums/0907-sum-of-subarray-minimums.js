/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    let beforeMinimum = new Array(arr.length).fill(-1);
    let result = new Array(arr.length).fill(0);
    let monoStack = [];

    for(let i = 0; i < arr.length; i++){
        while(monoStack.length && arr[monoStack[monoStack.length - 1]] > arr[i]){
            monoStack.pop();
        }
        if(monoStack.length){
            beforeMinimum[i] = monoStack[monoStack.length - 1];
        }

        monoStack.push(i);
    }

    for(let i = 0; i < arr.length; i++){
        result[i] = (result[beforeMinimum[i]] || 0) + ((i - beforeMinimum[i]) * arr[i]);
    }

    return result.reduce((acc,val) => acc + val) % (Math.pow(10,9) + 7);
};