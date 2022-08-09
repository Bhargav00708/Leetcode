var addBinary = function (a, b) {
  var sum1 = 0;
  var sum2 = 0;
  for (var i = 0; i < a.length; i++) {
    sum1 = sum1 + parseInt(a[i]) * Math.pow(2, i);
  };
  for (var i = 0; i < b.length; i++) {
    sum2 = sum2 + parseInt(b[i]) * Math.pow(2, i);
  };
  // console.log(sum1+sum2);
  let binarySum = convertToBinary(sum1 + sum2);
  binarySum = divideNum(binarySum);
  function divideNum(num) {
    let divideNumArray = [];
    let numOp;
    while (num != 0) {
      numOp = num % 10;
      divideNumArray.push(numOp);
      num = parseInt(num / 10);
    }
    return divideNumArray.reverse().split(``);
  }
  function convertToBinary(num) {
    let reminder;
    let mul = 1;
    let totalNum = 0;
    while (num != 0) {
      reminder = num % 2;
      num = parseInt(num / 2);
      totalNum = totalNum + mul * reminder;
      mul = mul * 10;
    }
    return totalNum;
  }
}
addBinary(`11`, `1`);