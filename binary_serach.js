function binarySearch(sortedArr, val) {
    let start = 0;
    let end = sortedArr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (sortedArr[middle] !== val && start <= end) {
        if (val > sortedArr[middle]) start = middle + 1;
        else end = middle - 1;
        middle = Math.floor((start + end) / 2);
    }
    return sortedArr[middle] === val ? middle : -1;
}

binarySearch([1,2,3,4,5,6,7,8,9],0)