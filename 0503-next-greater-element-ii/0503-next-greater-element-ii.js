/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stackArray = [];
    let returnArray = [];
    let numLength = nums.length;
    stackArray.push(nums[numLength - 1]);
    for (let i = nums.length - 2; 0 <= i; i--) {
        while (true) {
            if (stackArray.length == 0) {
                stackArray.push(nums[i]);
                break;
            }
            else if (nums[i] > stackArray[stackArray.length - 1]) {
                stackArray.pop();
            }
            else {
                stackArray.push(nums[i]);
                break;
            }
        }
    }
    for (let i = nums.length - 1; 0 <= i; i--) {
        while (true) {
            if (stackArray.length == 0) {
                stackArray.push(nums[i]);
                returnArray.push(-1);
                break;
            }
            else if (stackArray[stackArray.length - 1] > nums[i]) {
                returnArray.push(stackArray[stackArray.length - 1]);
                stackArray.push(nums[i]);
                break;
            }
            else {
                stackArray.pop();
            }
        }
    }
    return returnArray.reverse();
};