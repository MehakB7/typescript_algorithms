"use strict";
exports.__esModule = true;
exports.upperBound = void 0;
var upperBound = function (array, target) {
    var low = 0;
    var high = array.length - 1;
    while (low < high) {
        var mid = Math.floor((high - low) / 2) + low;
        if (array[mid] > target) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    return low;
};
exports.upperBound = upperBound;
// testcases 
console.log((0, exports.upperBound)([1, 2, 2, 2, 3, 3, 3, 4], 3));
