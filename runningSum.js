var runningSum = function(nums) {
    let newArray = nums.map((val,index)=>
    {
        let sum = 0;
        for(let i = 0; i < index+1; i++)
        {
            sum += nums[i];
        }
        return sum;
    })
    return newArray;
};

console.log(runningSum([1,2,3,4]));