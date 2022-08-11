var majorityElement = function(nums) {
    let globalObj = {};
    let firstPointer = 0;
    let secondPointer = nums.length - 1;
    while (secondPointer >= firstPointer) {
        let check = checkExistOrnot(nums[firstPointer]);
        if (check == `Close`) {
            break;
        }
        checkExistOrnot(nums[secondPointer]);
        ++firstPointer;
        --secondPointer;
    }
    function checkExistOrnot(data) {
        if (globalObj.hasOwnProperty(data)) {
            ++globalObj[data];
        }
        else {
            globalObj[data] = 1;
        }
        if (firstPointer == secondPointer) {
            return `Close`;
        }
    }
    let globalKey = Object.keys(globalObj).find((val)=>{
        return (globalObj[val] > parseInt(nums.length/2));
    })
    return globalKey;
};

console.log(majorityElement([3,2,3]));