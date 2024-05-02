var guestlist = ["Hammad", "Ali", "Ahmed"];
for (var i = 0; i < guestlist.length; i++) {
    console.log("I would like to have dinner with you " + guestlist[i]);
}
;
console.log(guestlist.length);
//removing one guest
console.log(guestlist[2] + " will not be able to come for the dinner. ");
guestlist.splice(2, 1);
console.log("so modified list is :");
for (var i = 0; i < guestlist.length; i++) {
    console.log(guestlist[i]);
}
;
// Adding one guest instead of the absent guest
guestlist.splice(2, 0, "riaz");
console.log("New person is added :");
for (var i = 0; i < guestlist.length; i++) {
    console.log("I would like to have dinner with you " + guestlist[i]);
}
;
//Adding more three guest
console.log("we have found a bigger dinner table so there will be more guest in the dinner");
//adding guest at the start
guestlist.splice(0, 0, "Hamza");
guestlist.splice(2, 0, "Farooq");
guestlist.splice(5, 0, "Ehtisham");
//updated list
for (var i = 0; i < guestlist.length; i++) {
    console.log("I would like to have dinner with you " + guestlist[i]);
}
;
console.log("No of people that are going to come to dinner are:" + guestlist.length);
