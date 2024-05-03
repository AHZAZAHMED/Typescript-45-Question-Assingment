var country = [
    { name: "pakistan", capital: "Islamabad", },
    { name: "palestine", capital: "Jerusalem", },
    { name: "malaysia", capital: " Kuala Lumpur", },
];
console.log("list of countries");
country.forEach(function (country, index) {
    console.log("Country ".concat(index + 1, ":"));
    console.log("Name: ".concat(country.name));
    console.log("Capital:".concat(country.capital));
});
