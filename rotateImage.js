var rotate = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    while () {
        let temp = matrix[i][matrix[i].length - 1];
        matrix[i][matrix[i].length - 1] = matrix[i][0];
        matrix[i][0] = temp;
    }
    return matrix;
};

console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));