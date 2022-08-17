var twoSum = function (numbers, target) {
    let firstPointer = 0;
    let secondPointer = numbers.length - 1;
    while (numbers[firstPointer] + numbers[secondPointer] != target) {
        if (numbers[firstPointer] + numbers[secondPointer] > target) {
            --secondPointer;
        }
        else {
            ++firstPointer;
        }
    }
    return [firstPointer + 1, secondPointer + 1];
}

console.log(twoSum([2, 7, 11, 15], 9));