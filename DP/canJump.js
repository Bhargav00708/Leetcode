var canJump = function(nums) {
    let indexPointer = 0;
    let maxPosition = 0;
    while (true)
    {
        maxPosition = Math.max(maxPosition, indexPointer + nums[indexPointer]);
        if(maxPosition >= nums.length - 1)
        {
            return true;
        }
        if(nums[indexPointer] == 0 && indexPointer >= maxPosition)
        {
            return false;
        }
        ++indexPointer;
    }
};

console.log(canJump([3,2,1,0,9]));