// Equality test
/*let string1 = "ali";
let string2 = "ali";

console.log("String1 is equal to string2? I predict true");
console.log(string1 == string2);

// Inequality test
let name1:string = "ali";
let name2:string = "ahzaz";

console.log("String1 is not equal to string2? I predict true");
console.log(string1 == string2);

//test using lowercase function
let uppercase:string = "AHZAZ";
let lowercase:string = "ahzaz";

console.log("uppercase is  equal to lowercase? I predict true");
console.log(uppercase == lowercase);

//  Greater than test
let x = 5;
let y = 3;

console.log("Is x greater than y? I predict true.");
console.log(x > y);

// Test 4: Less than test
let a = 10;
let b = 20;

console.log("Is b less than a? I predict true.");
console.log(a > b);

// Test 5: Greater than or equal to test
let p = 15;
let q = 10;

console.log("Is p greater than or equal to q? I predict true.");
console.log(p >= q);

// Test 6: Less than or equal to test
let m = 100;
let n = 99;

console.log("Is m less than or equal to n? I predict true.");
console.log(m <= n);
*/
// item is in the array
var e = [1, 2, 3, 4, 5];
var elementToFound = 4;
for (var i = 0; i < e.length; i++) {
    if (e[i] == elementToFound) {
        console.log("Element is found on index" + i);
    }
}
// test item is not in the array
var elementToFound1 = 7;
for (var i = 0; i < e.length; i++) {
    if (e[i] == elementToFound1) {
        console.log("Element is found on index" + i);
    }
}
