var isPossible = function (nums) {
    let firstCount = 0;
    let secondCount = 0;
    let i = 0;
    while (true) {
        if (isNaN((nums[i + 1] - nums[i]))) {
            return false;
        }
        if ((nums[i + 1] - nums[i]) == 1) {
            ++firstCount;
            nums.splice(i, 1);
        }
        else
        {
            i++;
        }
        if (firstCount == 2) {
            nums.splice(i, 1);
            if(nums.length == 0)
            {
                return true;
            }
            break;
        }
    }
    let j = 0;
    while (true) {
        if (isNaN((nums[j + 1] - nums[j]))) {
            return false;
        }
        if ((nums[j + 1] - nums[j]) == 1) {
            ++secondCount;
            nums.splice(j, 1);
        }
        else
        {
            j++;
        }
        if (secondCount == 2) {
            nums.splice(j, 1);
            break;
        }
    }
    return true;
};

console.log(isPossible([1,2,3,5,5,6,7])); 