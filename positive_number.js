var checkPerfectNumber = function(num) {
    let allDivisorArray = [];
    for(let i = 1; i < num; i++)
    {
        if((num % i) == 0)
        {
            allDivisorArray.push(i); 
        }
    }
    if(allDivisorArray.length == 0)
    {
        return false;
    }
    let sumDiv = allDivisorArray.reduce((acc,val)=>
    {
        return acc += val;
    })
    if(sumDiv == num)
    {
        return true;
    }
    return false;
};

console.log(checkPerfectNumber(28));