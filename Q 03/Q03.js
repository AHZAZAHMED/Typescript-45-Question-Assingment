var myName = "Ahzaz Ahmed";
var upperCase = myName.toUpperCase();
console.log(upperCase);
var lowerCase = myName.toLowerCase();
console.log(lowerCase);
var titleCase = myName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(titleCase);
