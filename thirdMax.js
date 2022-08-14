var findKthLargest = function (nums) {
    nums = new Set(nums);
    let newArray = [];
    nums.forEach((val) => {
        newArray.push(val);
    })
    let numFind = newArray.sort(function (a, b) { return a - b })[newArray.length - 3];
    if (numFind != undefined) {
        return numFind;
    }
    return newArray.sort()[newArray.length - 1];
};

console.log(thirdMax([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6]));