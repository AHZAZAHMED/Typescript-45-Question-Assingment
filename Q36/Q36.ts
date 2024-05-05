import * as promptSync from 'prompt-sync'
const prompt = promptSync();

function make_shirt(): void{
 let size : number = prompt("Enter the size of the shirt:");
 let message: string= prompt("Enter the message that you want to print:");

 console.log(`The infromation of the shirt is:
 size = ${size}
 Message to print :${message}`);
}

make_shirt();