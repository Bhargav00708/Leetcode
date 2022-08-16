var containsDuplicate = function (nums) {
    let globalObj = {};
    for(let i = 0; i < nums.length; i++)
    {
        if (globalObj.hasOwnProperty(nums[i])) {
            return true;
        }
        else {
            globalObj[nums[i]] = 1;
        }
    }
    return false;
};

console.log(containsDuplicate([3,3]));