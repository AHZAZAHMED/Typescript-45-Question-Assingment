function carInfo(manufacturer, modelName) {
    var additionalFeatures = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalFeatures[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    if (additionalFeatures.length > 0) {
        car.additionalFeatures = additionalFeatures;
    }
    return car;
}
var car1 = carInfo("Toyota", "Corolla", "Automatic transmission", "Keyless entry");
console.log(car1); // { manufacturer: 'Toyota', modelName: 'Corolla', additionalFeatures: [ 'Automatic transmission', 'Keyless entry' ] }
var car2 = carInfo("Honda", "Civic");
console.log(car2); // { manufacturer: 'Honda', modelName: 'Civic' }
