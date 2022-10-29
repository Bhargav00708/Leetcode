/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stackArray = [];
    let resultArray = [];
    resultArray.push(-1);
    stackArray.push(nums2[nums2.length - 1]);
    for(let i = nums2.length - 2; 0 <= i; i--)
    {
        while(true)
            {
        if(stackArray.length == 0)
            {
                resultArray.push(-1);
                stackArray.push(nums2[i]);
                break;
            }
       else if(nums2[i] > stackArray[stackArray.length - 1])
           {
               stackArray.pop();
           }
        else
            {
               resultArray.push(stackArray[stackArray.length - 1]); 
               stackArray.push(nums2[i]);
               break;
            }
            }
    }
    resultArray.reverse();
    let finalResult = [];
    for(let i = 0; i < nums1.length; i++){
        finalResult.push(resultArray[nums2.indexOf(nums1[i])]);
    }
    return finalResult;
};