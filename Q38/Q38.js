"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function describe_city(city, country) {
    if (country === void 0) { country = "Palestine"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Gaza ");
describe_city("Ashdod");
var city = prompt("Enter the name of  the city:");
var country = prompt("Enter the country name:");
describe_city(city, country);
