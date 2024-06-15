function carInfo (manufacturer : string , modelName : string , ...additionalFeatures: string[]){
    let car : {manufacturer : string,modelName : string, additionalFeatures ?: string[]}={
        manufacturer : manufacturer,
        modelName : modelName ,
    }
    if(additionalFeatures.length > 0){
        car.additionalFeatures = additionalFeatures;

    }
    return car;

}

let car1 = carInfo("Toyota","Corolla","Automatic transmission", "Keyless entry") ;
console.log(car1);// { manufacturer: 'Toyota', modelName: 'Corolla', additionalFeatures: [ 'Automatic transmission', 'Keyless entry' ] }

let car2 = carInfo("Honda", "Civic");
console.log(car2);// { manufacturer: 'Honda', modelName: 'Civic' }
