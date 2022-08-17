var moveZeroes = function(nums) {
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeroCount++;
        }
    }
    for(let i = 0; i < zeroCount; i++) {
        nums.splice(nums.indexOf(0),1);
        nums.push(0);
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));