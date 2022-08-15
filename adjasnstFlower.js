var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    if(flowerbed.length == 1 && flowerbed[0] == 0)
    {
        return true;
    }
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0) {
            if (i == 0) {
                if (flowerbed[i + 1] == 0) {
                    ++count;
                    flowerbed[i] = 1;
                }
            }
            if (i == (flowerbed.length-1)) {
                if (flowerbed[i - 1] == 0) {
                    ++count;
                    flowerbed[i] = 1;
                }
            }
            if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
                ++count;
                flowerbed[i] = 1;
            }
        }
        if (count == n) {
            return true;
        }
    }
    return false;
};
console.log(canPlaceFlowers([0],1));

