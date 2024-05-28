var magician = ["Ali", "Ahmed", "Hammad"];
function showMagician(name) {
    console.log("The following are Great magicians");
    for (var i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
function makeGreat(name) {
    for (var i = 0; i < name.length; i++) {
        name[i] = "The great " + name[i];
    }
}
makeGreat(magician);
showMagician(magician);
