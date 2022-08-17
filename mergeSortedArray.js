var merge = function (nums1, m, nums2, n) {
    nums1.splice(m,nums1.length);
    nums2.splice(n,nums2.length);
    for (let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i]);
    }
    nums1.sort((a,b)=>a-b);
    return nums1;
};

console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3));