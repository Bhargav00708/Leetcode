var shortestToChar = function(s, c) {
    let charArray = [];
    let charObject = {};
    let charObjectArray = [];
    for(let i = 0; i < s.length; i++)
    {
        if(s[i] == c)
        {
            charObject[i] = s;
        }
    }
    charObjectArray = Object.keys(charObject);
    for(let j = 0; j < s.length; j++)
    {
        if(s[j] == c)
        {
            charArray.push(0);
        }
        else
        {
            let min = Infinity;
            for(let z = 0; z < charObjectArray.length; z++)
            {
                if(Math.abs(j - charObjectArray[z]) < min)
                {
                    min = Math.abs(j - charObjectArray[z]);
                }
            }
            charArray.push(min);
        }
    }
    return charArray;
};

console.log(shortestToChar(`aaab`,`b`));