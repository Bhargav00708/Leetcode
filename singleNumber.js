var singleNumber = function (nums) {
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
        return (globalObj[val] == 1); 
    })
    return globalKey;
};

console.log(singleNumber([2, 2, 1,3,3]));