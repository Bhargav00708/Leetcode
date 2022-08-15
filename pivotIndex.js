var pivotIndex = function (nums) {

    let leftValue = 0;
    let rightValue = 0;
    for (let index = 0; index < nums.length; index++) {
        for (let i = index + 1; i < nums.length; i++) {
            leftValue += nums[i];
        }
        for (let j = 0; j < index; j++) {
            rightValue += nums[j];
        }
        if(leftValue == rightValue)
        {
            return index;
        }
        leftValue = 0;
        rightValue = 0;
    }
    return -1;
};

console.log(pivotIndex([2,1,-1]));