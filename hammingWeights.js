var hammingWeight = function(n) {
    let count = 0;
    // while(n != 0)
    // {   
    //     let reminder = n % 10;
    //     if(reminder == 1)
    //     {
    //         count += 1;
    //     }
    //     n = parseInt(n / 10);
    // }
    n = n.toString();
    for(let i = 0; i < n.length; i++)
    {
        if(n[i] == 1)
        {
            count += 1;
        }
    }
    return count;
};

console.log(hammingWeight(11111111111111111111111111111101));