var fizzBuzz = function(n) {
    let fizzArray = [];
    for(let i = 1; i <= n; i++)
    {
        if((i % 15 == 0))
        {
            fizzArray.push(`FizzBuzz`)
        }
        else if(i % 5 == 0)
        {
            fizzArray.push(`Buzz`)
        }
        else if(i % 3 == 0)
        {
            fizzArray.push(`Fizz`)
        }
        else
        {
            fizzArray.push(i.toString());
        }
    }
    return fizzArray;
};

console.log(fizzBuzz(15));