var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianList = ["Ali", "Ahmed", "Hammad"];
function makeGreat2(magicianList) {
    return magicianList.map(function (magicianList) { return "Great ".concat(magicianList); });
}
var greatMagician = makeGreat2(__spreadArray([], magicianList, true));
function showMagician2(magicianList, greatMagician) {
    console.log("The following are the orignal magicians");
    magicianList.map(function (magicianList) { return console.log(magicianList); });
    console.log("The following are the great magicians");
    greatMagician.map(function (greatMagician) { return console.log(greatMagician); });
}
makeGreat2(magicianList);
showMagician2(magicianList, greatMagician);
