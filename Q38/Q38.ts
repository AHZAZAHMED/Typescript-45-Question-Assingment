import * as promptSync from 'prompt-sync'
const prompt = promptSync();

function describe_city(city : string , country : string = "Palestine") : void{

    console.log(`${city} is in ${country}`);
}

describe_city("Gaza ");

describe_city("Ashdod");

let city = prompt("Enter the name of  the city:");
let country = prompt("Enter the country name:");
describe_city(city, country);