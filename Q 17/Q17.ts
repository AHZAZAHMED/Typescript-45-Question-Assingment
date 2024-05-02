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
console.log("New person is added :");
for(let i=0;i<guestlist.length;i++){
    console.log("I would like to have dinner with you " + guestlist[i]);
    };


//Adding more three guest
console.log("we have found a bigger dinner table so there will be more guest in the dinner");
//adding guest at the start
guestlist.splice(0,0,"Hamza");
guestlist.splice(2,0,"Farooq");
guestlist.splice(5,0,"Ehtisham");
//updated list
for(let i=0;i<guestlist.length;i++){
    console.log("I would like to have dinner with you " + guestlist[i]);
    };
console.log(guestlist.length);
// removing guest from the list
console.log(" new dinner table won’t arrive in time for the dinner, and we have space for only two guests. we can invite only two people for dinner.");
for(let i=guestlist.length; i>2; i--){
    console.log(guestlist[i-1]+" sorry we can’t invite you to dinner.");
    guestlist.pop();
};
console.log("Updated guest list");
for(let i=0;i<guestlist.length;i++){
    console.log("I would like to have dinner with you " + guestlist[i]);
    };

//removing the last two person from the list
for(let i=guestlist.length; i>0; i--){
    console.log(guestlist[i-1]+" sorry we can’t invite you to dinner.");
    guestlist.pop();

    
};
console.log(guestlist.length);
for(let i=0;i<guestlist.length;i++){
    console.log("I would like to have dinner with you " + guestlist[i]);
    };