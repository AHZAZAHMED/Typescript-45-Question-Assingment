let makeSandwiche = (...item : string[]) =>{
console.log("Summary of the sandwich that is being ordered");
item.forEach(item => console.log(`${item}`))
}

makeSandwiche("Ham", "Cheese", "Lettuce");
makeSandwiche("Turkey", "Tomato", "Mayo", "Mustard", "Pickles");
makeSandwiche("Peanut Butter", "Jelly");