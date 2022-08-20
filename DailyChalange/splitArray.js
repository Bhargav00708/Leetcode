var isPossible = function(nums) {
    // The subsequences type is [{ length: number, num: number }, ...]
    // The key about use less memory is that don't saving all number in each subsequences,
    // just only save the last number of each subsequences and the length
    const subsequences = [];    
    nums.forEach(num => {
        for(let i = subsequences.length - 1; i >= 0; i--) {
            const obj = subsequences[i]
            const subNum = obj.num
            
            if (num === subNum + 1) {
                obj.num = num
                obj.length += 1
                return
            }
        }
        
        subsequences.push({
            length: 1,
            num,
        })
    })
    
    
    return !subsequences.find(item => item.length < 3)
};

console.log(isPossible([1,2,3,3,4,5])); 