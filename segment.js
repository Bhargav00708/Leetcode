var countSegments = function(s) {
    let arrayOp = s.split(" ");
    let newArray = arrayOp.filter((val)=>
    {
        if(val == "")
        {
            return false;
        }
        return true;
    })
    return newArray.length;
};

console.log(countSegments("Of all the gin joints in all the towns in all the world,   "));