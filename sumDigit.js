var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;
    while(n != 0)
    {
        let reminder = n % 10;
        sum += reminder;
        product *= reminder;
        n = parseInt(n / 10)
    }
    return (product - sum);
};

console.log(subtractProductAndSum(234));