var shiftingLetters = function (s, shifts) {
    s = s.split("");
    for (let i = 0; i < shifts.length; i++) {
        for (let j = shifts[i][0]; j <= shifts[i][1]; j++) {
            if(shifts[i][2] == 0)
            {
                if(s[j] == `a`)
                {
                    s[j] = `z`;
                    continue;
                }
                let asciiNumber =  s[j].charCodeAt() - 1;
                s[j] = String.fromCharCode(asciiNumber);
            }   
            else
            {
                if(s[j] == `z`)
                {
                    s[j] = `a`;
                    continue;
                }
                let asciiNumber =  s[j].charCodeAt() + 1;
                s[j] = String.fromCharCode(asciiNumber);
            }
        }
    }
    return s.join("");
};

console.log(shiftingLetters(`dztz`, [[0,0,0],[1,1,1]]));