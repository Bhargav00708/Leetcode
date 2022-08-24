// var minimumRecolors = function (blocks, k) {
//     let count = 0;
//     let minCount = Infinity;
//     for (let i = 0; i <= blocks.length - k; i++) {
//         for (let j = i; j < k+i; j++) {
//             if(blocks[j] == `W`)
//             {
//                 count++;
//             }
//         }
//         if(minCount > count)
//         {
//             minCount = count;
//         }
//         count = 0;
//     }
//     return minCount;
// };

// console.log(minimumRecolors(`WBBWWBBWBW`,7));


var minimumRecolors = function (blocks, k) {
    let count = 0;
    let minCount = Infinity;
    for (let i = 0; i < k; i++) {
        if (blocks[i] == `W`) {
            count++;
        }
    }
    if(minCount > count)
    {
        minCount = count;
    }
    for (let i = 1; i < blocks.length; i++) {
        if (blocks[i-1] == `W` && blocks[i+k-1] == `B`) {
            count--;
        }
        if (blocks[i-1] == `B` && blocks[i+k-1] == `W`) {
            count++;
        }
        if(minCount > count)
        {
            minCount = count;
        }
    }
    if(minCount <= 0)
    {
        return 0;
    }
    return minCount;
}
console.log(minimumRecolors("WBBWWBBWBW", 7));