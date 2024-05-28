let magician1 :string[] = ["Ali","Ahmed","Hammad"];

function showMagician1(name : string[]){
    console.log("The following are Great magicians");
    
    for(let i = 0 ; i< name.length ; i++){
    console.log(name[i]);
    }

}

function makeGreat1(name : string[]){
  
    for(let i = 0 ; i < name.length ; i++ ){
        name[i] = "The great "+ name[i]; 
    }
  
}
makeGreat1(magician1);
showMagician1(magician1);