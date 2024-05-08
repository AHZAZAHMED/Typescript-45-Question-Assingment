"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function city_country(city, country) {
    if (country === void 0) { country = "Palestine"; }
    return ("\"".concat(city, ",").concat(country, "\""));
}
city_country("Gaza", "Palestine");
city_country("Ashdod", "Palestine");
city_country("Karachi", "Pakistan");
