type Countries = {
    name : string ;
    capital : string ;
    
};

let country : Countries [] =[
    {name : "pakistan", capital : "Islamabad" ,  },
    {name : "palestine", capital : "Jerusalem", },
    {name : "malaysia", capital : " Kuala Lumpur", },
]

console.log("list of countries");
country.forEach((country,index)=>{
    console.log(`Country ${index+1}:`);
    console.log(`Name: ${country.name}`);
    console.log(`Capital:${country.capital}`)
});


