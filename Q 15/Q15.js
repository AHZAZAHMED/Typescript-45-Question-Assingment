var guestlist = ["Hammad", "Ali", "Ahmed"];
for (var i = 0; i < guestlist.length; i++) {
    console.log("I would like to have dinner with you " + guestlist[i]);
}
;
console.log(guestlist.length);
console.log(guestlist[2] + " will not be able to come for the dinner. ");
guestlist.splice(2, 1);
console.log("so modified list is :");
for (var i = 0; i < guestlist.length; i++) {
    console.log(guestlist[i]);
}
;
guestlist.splice(2, 0, "riaz");
console.log("New person is added :");
for (var i = 0; i < guestlist.length; i++) {
    console.log("I would like to have dinner with you " + guestlist[i]);
}
;
