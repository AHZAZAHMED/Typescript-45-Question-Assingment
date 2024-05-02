let visitlists : string[] = ["zimbabwe","germany","Europe","Ireland"];
let sortedVisiterLists : string[] = [];
//orignal array
console.log("\n orignal array ");
for(let i=0;i<visitlists.length;i++){
    console.log(visitlists[i]);
}
for(let i=0;i<visitlists.length;i++){
    sortedVisiterLists[i]=visitlists[i];
}
sortedVisiterLists.sort();

//sorted array
console.log("\n alphabetically arranged array ");
for(let i=0;i<sortedVisiterLists.length;i++){
    console.log(sortedVisiterLists[i]);
}
//orignal array
console.log("\n orignal array ");
for(let i=0;i<visitlists.length;i++){
    console.log(visitlists[i]);
}
sortedVisiterLists.reverse();

//reverse alphabetical order
console.log("\n reverse alphabetically arranged array ");

for(let i=0;i<sortedVisiterLists.length;i++){
    console.log(sortedVisiterLists[i]);
}
// orignal array
console.log("\n orignal array ");
for(let i=0;i<visitlists.length;i++){
    console.log(visitlists[i]);
}
visitlists.reverse();
//reverse orignal list
console.log("\n reverse orignal list array ");

for(let i=0;i<visitlists.length;i++){
    console.log(visitlists[i]);
}
//Again to orignal form
visitlists.reverse();
console.log("\n Again to orignal form ");
for(let i=0;i<visitlists.length;i++){
    console.log(visitlists[i]);
}
//orignal list sorted alphabetically
visitlists.sort();
console.log("\n orignal list sorted alphabetically ");
for(let i=0;i<visitlists.length;i++){
    console.log(visitlists[i]);
}
//orignal list sorted in reverse alphabetical order
visitlists.reverse();
console.log("\n orignal list sorted in reverse alphabetical order ");
for(let i=0;i<visitlists.length;i++){
    console.log(visitlists[i]);
}