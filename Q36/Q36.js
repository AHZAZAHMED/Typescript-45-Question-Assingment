"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function make_shirt() {
    var size = prompt("Enter the size of the shirt:");
    var message = prompt("Enter the message that you want to print:");
    console.log("The infromation of the shirt is:\n size = ".concat(size, "\n Message to print :").concat(message));
}
make_shirt();
