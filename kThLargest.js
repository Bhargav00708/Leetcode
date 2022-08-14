var findKthLargest = function (nums, k) {
    let numFind = nums.sort(function (a, b) { return a - b })[nums.length - k];
    return numFind;
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));