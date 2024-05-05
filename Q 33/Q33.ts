let numbers : number[] = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i<numbers.length; i++){
    let ordinalEnd : string ;

    if(numbers[i] == 1){
ordinalEnd = "st";
    }else if (numbers[i] == 2){
        ordinalEnd = "nd";
    }else if(numbers[i] == 3){
        ordinalEnd = "rd";
    }else{
        ordinalEnd = "th";
    }

    console.log(`${numbers[i]}${ordinalEnd}`);
}