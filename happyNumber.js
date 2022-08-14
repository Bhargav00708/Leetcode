var isHappy = function (n) {
    let count = 1;
    while (true) 
    {
        let sum = 0;
        while (n != 0) {
            let reminderNum = n % 10;
            sum += Math.pow(reminderNum, 2);
            n = parseInt(n / 10);
        }
        if (((sum % 10) == sum) && (count != 1)) {
            if (sum == 1) {
                return true;
            }
            else
            {
                return false;
            }
        }
        n = sum;
        ++count;
    }
};

console.log(isHappy(2));