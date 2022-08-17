var uniqueMorseRepresentations = function (words) {
    let answerArray = [];
    let morseArray = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    let firstPointer = 0;
    let secondPointer = words.length - 1;
    while (secondPointer >= firstPointer) {
        let firstWord = ``;
        let secondWord = ``;
        for (let j = 0; j < words[firstPointer].length; j++) {
            let letter = words[firstPointer][j];
            firstWord += morseArray[letter.charCodeAt() - 97];
        }
        answerArray.push(firstWord);
        if (secondPointer == firstPointer) {
            break;
        }
        for (let i = 0; i < words[secondPointer].length; i++) {
            let letter = words[secondPointer][i];
            secondWord += morseArray[letter.charCodeAt() - 97];
        }
        answerArray.push(secondWord);
        --secondPointer;
        ++firstPointer;
    }
    let newSetOp = new Set(answerArray);
    return newSetOp.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));