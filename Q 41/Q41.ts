let magician :string[] = ["Ali","Ahmed","Hammad"];

function showMagician(name : string[]){
    console.log("The following are Great magicians");
    
    for(let i = 0 ; i< name.length ; i++){
    console.log(name[i]);
    }

}


showMagician(magician);