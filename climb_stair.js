var climbStairs = function(n) {
  let num1 = 1;
  let num2 = 1;
  let temp = 1;
  for(let i =0; i < n-1; i++)
  {
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
  } 
  return temp; 
};

console.log(climbStairs(1));