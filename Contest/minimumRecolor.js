var minimumRecolors = function (blocks, k) {
    let count = 0;
    let minCount = Infinity;
    for (let i = 0; i <= blocks.length - k; i++) {
        for (let j = i; j < k+i; j++) {
            if(blocks[j] == `W`)
            {
                count++;
            }
        }
        if(minCount > count)
        {
            minCount = count;
        }
        count = 0;
    }
    return minCount;
};

console.log(minimumRecolors(`WBBWWBBWBW`,7));