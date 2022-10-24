/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let myArr = [];
    for (let i = 0; i < nums1.length; i++) {
        let myIndex = nums2.indexOf(nums1[i]);
        let flag = true;
        for (let j = myIndex + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                myArr.push(nums2[j]);
                flag = false;
                break;
            }
        }
        if (flag) {
            myArr.push(-1);
        }
    }
    return myArr;
};