var findPoisonedDuration = function (timeSeries, duration) {
    let poisonedDuration = 0;
    for (let i = 1; i < timeSeries.length; i++) {
        let difference = timeSeries[i] - timeSeries[i - 1];
        if (difference >= duration) {
            poisonedDuration += duration;
        }
        else {
            poisonedDuration += difference;
        }
    }
    return (poisonedDuration += duration);
};

console.log(findPoisonedDuration([1, 2, 4], 2));