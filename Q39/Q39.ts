import * as promptSync from 'prompt-sync'
const prompt = promptSync();

function city_country(city : string , country : string = "Palestine") : void{

    console.log(`"${city},${country}"`);
}

city_country("Gaza","Palestine");

city_country("Ashdod","alestine");

city_country("Karachi", "Pakistan");