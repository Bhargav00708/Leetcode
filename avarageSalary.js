var average = function (salary) {
    let sum = 0;
    salary.sort();
    for (let i = 1; i < salary.length - 1; i++) {
        sum += salary[i];
    }
    sum = sum/(salary.length-2);
    return sum.toFixed(5);
};

console.log(average([25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]));