var largestPalindromic = function (num) {
    num = num.toString();
    let firstPointer = 0;
    let secondPointer = num.length - 1;
    let totalCount = 0;
    let finalString = ``;
    let globalObbject = {};
    while (firstPointer <= secondPointer) {
        if (globalObbject.hasOwnProperty(num[firstPointer])) {
            ++globalObbject[num[firstPointer]];
            if (globalObbject[num[firstPointer]] % 2 == 0) {
                totalCount = totalCount + 2;
            }
        }
        else {
            globalObbject[num[firstPointer]] = 1;
        }
        if (firstPointer == secondPointer) {
            break;
        }
        if (globalObbject.hasOwnProperty(num[secondPointer])) {
            ++globalObbject[num[secondPointer]];
            if (globalObbject[num[secondPointer]] % 2 == 0) {
                totalCount = totalCount + 2;
            }
        }
        else {
            globalObbject[num[secondPointer]] = 1;
        }

        ++firstPointer;
        --secondPointer;
    }
    let allKeys = Object.keys(globalObbject);
    let oneNumber = ``;
    for (let i = 0; i < allKeys.length; i++) {
        if ((globalObbject[allKeys[i]] / 2) >= 1) {
            if (globalObbject[allKeys[i]] % 2 == 0) {
                for (let j = 0; j < globalObbject[allKeys[i]]; j++) {
                    finalString += allKeys[i];
                }
            }
            else {
                for (let j = 0; j < globalObbject[allKeys[i]] - 1; j++) {
                    finalString += allKeys[i];
                }
            }
        }
        else if(globalObbject[allKeys[i]] == 1)
        {
            oneNumber = allKeys[i];
        }
    }
    return finalString;
};

console.log(largestPalindromic(444947137));