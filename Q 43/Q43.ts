let magicianList :string[] = ["Ali","Ahmed","Hammad"];

function makeGreat2(magicianList : string[]){
    return magicianList.map(magicianList => `Great ${magicianList}`);
}

let greatMagician : string[] = makeGreat2([...magicianList]);

function showMagician2(magicianList : string[] , greatMagician : string[] ){
    console.log("The following are the orignal magicians");
    
    magicianList.map(magicianList => console.log(magicianList))

    console.log("The following are the great magicians");
    greatMagician.map(greatMagician => console.log(greatMagician))   
}

makeGreat2(magicianList);
showMagician2(magicianList,greatMagician);