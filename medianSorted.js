var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    let newArray = [];
    while (nums1[i] != undefined && nums2[j] != undefined) {
        if (nums1[i] < nums2[j]) {
            newArray.push(nums1[i]);
            i++;
        }
        else {
            newArray.push(nums2[j]);
            j++;
        }
    }
    if (nums1[i] != undefined) {
        for (let z = i; z < nums1.length; z++) {
            newArray.push(nums1[z]);
        }
    }
    if (nums2[j] != undefined) {
        for (let y = j; y < nums2.length; y++) {
            newArray.push(nums2[y]);
        }
    }
    let median;
    if(newArray.length % 2 == 0) {
        median = (newArray[newArray.length/2] + newArray[newArray.length/2 - 1]) / 2;
    }
    else
    {
        median = newArray[parseInt(newArray.length/2)];
    }
    return median.toFixed(5);
};

console.log(findMedianSortedArrays([1, 2], [3,4]));