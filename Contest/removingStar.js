// var removeStars = function (s) {
//     let stackOp = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == `*`) {
//             stackOp.pop();
//         }
//         else {
//             stackOp.push(s[i]);
//         }
//     }
//     return stackOp.join(``);
// };

// console.log(removeStars(`leet**cod*e`));


var removeStars = function(s) {
    ss = "";
for(let i = 0; i < s.length; i++){
    if(s[i] !== "*")
        ss += s[i];
    if(s[i+1] === "*")
         ss = ss.slice(0,ss.length-1);        
}
    return ss;
};

console.log(removeStars(`leet**cod*e`));