var longestPalindrome = function(s) {
    let firstPointer = 0;
    let secondPointer = s.length - 1;
    let totalCount = 0;
    let globalObbject = {};
    while (firstPointer <= secondPointer)
    {
        if(globalObbject.hasOwnProperty(s[firstPointer]))
        {
            ++globalObbject[s[firstPointer]];
            if(globalObbject[s[firstPointer]] % 2 == 0)
            {
                totalCount = totalCount + 2;
            }
        }
        else
        {
            globalObbject[s[firstPointer]] = 1;
        }
        if(firstPointer == secondPointer)
        {
            break;
        }
        if(globalObbject.hasOwnProperty(s[secondPointer]))
        {
            ++globalObbject[s[secondPointer]];
            if(globalObbject[s[secondPointer]] % 2 == 0)
            {
                totalCount = totalCount + 2;
            }
        }
        else
        {
            globalObbject[s[secondPointer]] = 1;
        }

        ++firstPointer;
        --secondPointer;
    }
    return totalCount != s.length ? totalCount + 1 : totalCount;
};

console.log(longestPalindrome(`bb`));