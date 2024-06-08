var makeSandwiche = function () {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Summary of the sandwich that is being ordered");
    item.forEach(function (item) { return console.log("".concat(item)); });
};
makeSandwiche("Ham", "Cheese", "Lettuce");
makeSandwiche("Turkey", "Tomato", "Mayo", "Mustard", "Pickles");
makeSandwiche("Peanut Butter", "Jelly");
