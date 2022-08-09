function squareRoot(num)
{
    let check;
    for(var i =1; i <= parseInt(num/2)+1; i++)
    {
        check = i * i;
        if(check == num)
        {
            return i;
        }
        if(check > num)
        {
            return i-1;
        }
    }
}

console.log(squareRoot(8));