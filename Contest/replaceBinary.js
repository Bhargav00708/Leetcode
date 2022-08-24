var secondsToRemoveOccurrences = function(s) {
    let count = 0;
    if(!(s.match(`01`)))
    {
        return count;
    }
    while(true)
    {
        let regOp = /01/gi;
        s = s.replace(regOp, '10');
        count++;
        if(s.match(`01`))
        {
            continue;
        }
        else
        {
            break;
        }
    }
    return count;
};

console.log(secondsToRemoveOccurrences(`0110101`));