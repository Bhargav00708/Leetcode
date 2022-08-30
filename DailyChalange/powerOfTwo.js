var reorderedPowerOf2 = function(n) {
    for(let i = 0; i < 36; i++) {
        let wandaOP = Math.pow(2,i);
        if(wandaOP.toString().length > n.toString().length)
        {
            return false;
        }
        if(wandaOP.toString().length == n.toString().length)
        {
            let result = checkAnagram(wandaOP,n);
            if(result)
            {
                return true;
            }
        }
    }
    return false;
};

function checkAnagram(wandaOP,n)
{
    n = n.toString();
    wandaOP = wandaOP.toString();
    for(let i = 0 ; i < wandaOP.length;i++)
    {
        n = n.replace(wandaOP[i],``);   
    }
    if(n == ``)
    {
        return true;
    }
}

console.log(reorderedPowerOf2(125));