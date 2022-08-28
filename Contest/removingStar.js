var answerQueries = function (nums, queries) {
    nums.sort();
    let data = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        let sum = 0;
        for (let j = 0; j < nums.length; j++) {
            sum += nums[j];
            ++count;
            if (sum > queries[i]) {
                --count;
                break;
            }
        }
        data.push(count);
    }
    return data;
};

console.log(answerQueries([736411,184882,914641,37925,214915], [331244,273144,118983,118252,305688,718089,665450]));