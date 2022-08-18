var minSetSize = function (arr) {
    let globalObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (globalObj.hasOwnProperty(arr[i])) {
            ++globalObj[arr[i]];
        }
        else {
            globalObj[arr[i]] = 1;
        }
    }
    let keyArray = Object.keys(globalObj);
    let finalArray = [];
    for (let i = 0; i < keyArray.length; i++) {
        finalArray.push([globalObj[keyArray[i]], parseInt(keyArray[i])]);
    }
    finalArray.sort();
    let sum = 0;
    let count = 0;
    for (let i = finalArray.length-1; i >= 0; i--) {
        sum += finalArray[i][0];
        ++count;
        if(sum >= (arr.length/2))
        {
            break;
        }
    }
    return count;
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));