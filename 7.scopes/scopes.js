//functional scope(it can not run outside the limit of fncton)
// var let consts all have functional limited scope.we have to console it only in the braces of function.
function getfullname(){
    const total=100;
    console.log(total);
}

//block (var can work outside the block but const and let doesnt works outside)
{var age=10;
let contact=98875837587;
const address="india";
console.log(contact);
console.log(address);
}
console.log(age);

//Global scope (no block,it can use in any function or anywhere)
const fname="john";
let lname="wick";
var address="nanded";

//Reassign (Let and Var can be reassign)
var one=1;
one=2;
console.log(one);

let second=2;
second=3;
console.log(second);



