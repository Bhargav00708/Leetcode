var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let globalObj = {};
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != `.`) {
                if (globalObj.hasOwnProperty(board[i][j])) {
                    return false;
                }
                else {
                    globalObj[board[i][j]] = true;
                }
            }
        }
    }
    for (let i = 0; i < 9; i++) {
        let globalObj = {};
        for (let j = 0; j < 9; j++) {
            if (board[j][i] != `.`) {
                if (globalObj.hasOwnProperty(board[j][i])) {
                    return false;
                }
                else {
                    globalObj[board[j][i]] = true;
                }
            }
        }
    }

    function threeCheck(rowStart, rowEnd, columnStart, columnEnd) {
        let globalObj = {};
        for (let i = rowStart; i < rowEnd; i++) {
            for (let j = columnStart; j < columnEnd; j++) {
                if (board[i][j] != `.`) {
                    if (globalObj.hasOwnProperty(board[i][j])) {
                        return false;
                    }
                    else {
                        globalObj[board[i][j]] = true;
                    }
                }
            }
        }
    }

    let returnedData1 = threeCheck(0, 3, 0, 3);
    if (returnedData1 == false) {
        return false;
    }
    let returnedData2 = threeCheck(3, 6, 0, 3);
    if (returnedData2 == false) {
        return false;
    }
    let returnedData3 = threeCheck(6, 9, 0, 3);
    if (returnedData3 == false) {
        return false;
    }
    let returnedData4 = threeCheck(0, 3, 3, 6);
    if (returnedData4 == false) {
        return false;
    }
    let returnedData5 = threeCheck(3, 6, 3, 6);
    if (returnedData5 == false) {
        return false;
    }
    let returnedData6 = threeCheck(6, 9, 3, 6);
    if (returnedData6 == false) {
        return false;
    }
    let returnedData7 = threeCheck(0, 3, 6, 9);
    if (returnedData7 == false) {
        return false;
    }
    let returnedData8 = threeCheck(3, 6, 6, 9);
    if (returnedData8 == false) {
        return false;
    }
    let returnedData9 = threeCheck(6, 9, 6, 9);
    if (returnedData9 == false) {
        return false;
    }

    return true;
};