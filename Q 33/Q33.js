var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var ordinalEnd = void 0;
    if (numbers[i] == 1) {
        ordinalEnd = "st";
    }
    else if (numbers[i] == 2) {
        ordinalEnd = "nd";
    }
    else if (numbers[i] == 3) {
        ordinalEnd = "rd";
    }
    else {
        ordinalEnd = "th";
    }
    console.log("".concat(numbers[i]).concat(ordinalEnd));
}
