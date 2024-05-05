"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function make_Shirt(size, message) {
    if (size === void 0) { size = " large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Shrit detail:\n    size = ".concat(size, "\n    message = ").concat(message, "\n"));
}
make_Shirt();
make_Shirt("medium");
var size = prompt("Enter the size of the shirt:");
var message = prompt("Enter the message to print:");
make_Shirt(size, message);
