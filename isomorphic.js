var isIsomorphic = function (s, t) {
    let char1Count = {};
    let char2Count = {};
    let charObject = {};
    for (let i = 0; i < s.length; i++) {
        if (!(charObject.hasOwnProperty(s[i]))) {
            charObject[s[i]] = t[i];
        }
        else {
            if (charObject[s[i]] == t[i]) {
                continue;
            }
            return false;
        }
        if (char1Count.hasOwnProperty(s[i])) {
            ++char1Count[s[i]];
        }
        else {
            char1Count[s[i]] = 1;
        }
        if (char2Count.hasOwnProperty(t[i])) {
            ++char2Count[t[i]];
        }
        else {
            char2Count[t[i]] = 1;
        }
    }
    if(Object.keys(char1Count).length == Object.keys(char2Count).length)
    {
        return true;
    }
    return false;
};

console.log(isIsomorphic(`badc`, `baba`));