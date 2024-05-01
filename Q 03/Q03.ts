let myName : string = "Ahzaz Ahmed";
let upperCase : string = myName.toUpperCase();
console.log(upperCase);
let lowerCase :string = myName.toLowerCase();
console.log(lowerCase);
let titleCase : string = myName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(titleCase);