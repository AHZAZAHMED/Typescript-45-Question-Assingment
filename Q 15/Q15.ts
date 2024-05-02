let guestlist : string[] = ["Hammad","Ali","Ahmed"];
for(let i=0;i<guestlist.length;i++){
console.log("I would like to have dinner with you " + guestlist[i]);
};
console.log(guestlist.length);

//removing one guest
console.log(guestlist[2]+" will not be able to come for the dinner. ");
guestlist.splice(2,1);
console.log("so modified list is :");
for(let i=0;i<guestlist.length;i++){
    console.log(guestlist[i]);
    };

// Adding one guest instead of the absent guest
guestlist.splice(2,0,"riaz");
console.log("New person is added :")
for(let i=0;i<guestlist.length;i++){
    console.log("I would like to have dinner with you " + guestlist[i]);
    };

