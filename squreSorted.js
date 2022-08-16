var sortedSquares = function(nums) {
    let sortedArray = nums.map((val)=>
    {
        return Math.pow(val,2);
    })
    return sortedArray.sort((a,b)=>(a-b));
};

console.log(sortedSquares([-4,-1,0,3,10]));