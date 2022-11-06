/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            nums[i] *= 2;
            nums[i+1] = 0;
        }
    }
    let zeroIndex = nums.indexOf(0);
    if(zeroIndex == -1) return nums;
    for(let i = zeroIndex + 1; i < nums.length; i++){
        if(nums[i] != 0){
            nums[zeroIndex] = nums[i];
            nums[i] = 0;
            ++zeroIndex;
        }
    }
    return nums;
};