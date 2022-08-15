var isSubsequence = function(s, t) {
    if(s == "")
    {
        return true;
    }
    let firstCharIncrementer = 0;
    let secondCharIncrementer = 0;
    while(secondCharIncrementer < t.length)
    {
        if(s[firstCharIncrementer] == t[secondCharIncrementer])
        {
            ++firstCharIncrementer;
            if(s.length == firstCharIncrementer)
            {
                return true;
            }
        }
        ++secondCharIncrementer;
    }
    return false;
};

console.log(isSubsequence(`azc`,`ahhibiuhic`));


