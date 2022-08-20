var minRefuelStops = function (target, startFuel, stations) {
    let minCount = 0;
    for (let i = 0; i < stations.length; i++) {
        if ((startFuel - stations[i][0]) <= 0) {
            target -= startFuel;
            startFuel = stations[i][1];
            minCount++;
        }
    }
};

console.log(minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]));