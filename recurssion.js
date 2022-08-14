function recurssion(num)
{
    if(num == 1)
    {
        return 1;
    }
    return num * recurssion(num-1);
}

console.log(recurssion(4));