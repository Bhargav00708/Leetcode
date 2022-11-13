/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let evenIndex = 0;
    let oddIndex = 1;
    let myArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            myArray[evenIndex] = nums[i];
            evenIndex += 2;
        }
        else {
            myArray[oddIndex] = nums[i];
            oddIndex += 2;
        }
    }
    return myArray;
};