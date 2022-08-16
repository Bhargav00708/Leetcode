var rotate = function(nums, k) {
    let divider = k % nums.length;
    let leftArr = nums.splice(0,nums.length-divider);
    nums.push(...leftArr);
    return nums;
};

console.log(rotate([1,2,3,4,5,6],2));