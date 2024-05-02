var visitlists = ["zimbabwe", "germany", "Europe", "Ireland"];
var sortedVisiterLists = [];
//orignal array
console.log("\n orignal array ");
for (var i = 0; i < visitlists.length; i++) {
    console.log(visitlists[i]);
}
for (var i = 0; i < visitlists.length; i++) {
    sortedVisiterLists[i] = visitlists[i];
}
sortedVisiterLists.sort();
//sorted array
console.log("\n alphabetically arranged array ");
for (var i = 0; i < sortedVisiterLists.length; i++) {
    console.log(sortedVisiterLists[i]);
}
//orignal array
console.log("\n orignal array ");
for (var i = 0; i < visitlists.length; i++) {
    console.log(visitlists[i]);
}
sortedVisiterLists.reverse();
//reverse alphabetical order
console.log("\n reverse alphabetically arranged array ");
for (var i = 0; i < sortedVisiterLists.length; i++) {
    console.log(sortedVisiterLists[i]);
}
// orignal array
console.log("\n orignal array ");
for (var i = 0; i < visitlists.length; i++) {
    console.log(visitlists[i]);
}
visitlists.reverse();
//reverse orignal list
console.log("\n reverse orignal list array ");
for (var i = 0; i < visitlists.length; i++) {
    console.log(visitlists[i]);
}
//Again to orignal form
visitlists.reverse();
console.log("\n Again to orignal form ");
for (var i = 0; i < visitlists.length; i++) {
    console.log(visitlists[i]);
}
//orignal list sorted alphabetically
visitlists.sort();
console.log("\n orignal list sorted alphabetically ");
for (var i = 0; i < visitlists.length; i++) {
    console.log(visitlists[i]);
}
//orignal list sorted in reverse alphabetical order
visitlists.reverse();
console.log("\n orignal list sorted in reverse alphabetical order ");
for (var i = 0; i < visitlists.length; i++) {
    console.log(visitlists[i]);
}
