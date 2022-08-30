var removeDigit = function (number, digit) {
    let maxSum = 0;
    for (let i = 0; i < number.length; i++) {
        let sum = 0;
        if (number[i] == digit) {
            for (let j = 0; j < number.length; j++) {
                if (j == i) {
                    continue;
                }
                sum += number[j];
            }
        }
        if (BigInt(sum) > maxSum) {
            maxSum = BigInt(sum);
        }
    }
    return maxSum.toString();
};

console.log(removeDigit("2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471", `3`));

"2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471"
"3"