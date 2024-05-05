import * as promptSync from 'prompt-sync'
const prompt = promptSync();

function make_Shirt(size : string =" large" , message : string = "I love typescript") : void {

console.log(`Shrit detail:
    size = ${size}
    message = ${message}
`)
}

make_Shirt();

make_Shirt("medium");

let size : string = prompt("Enter the size of the shirt:");
let message : string =prompt("Enter the message to print:") 
make_Shirt(size,message);