var climbStairs = function (n) {
    let a = 1;
    let b = 1;
    let temp;
    for(let i = 0; i < n-1; i++)
    {
        temp = a;
        a = a + b;
        b = temp;
    }
    return a;
  };

console.log(climbStairs(5));