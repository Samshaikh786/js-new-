//function: a block code that is execute on a certain i.e. you have to call the function the
function hello(){
    console.log("hello everbody")
};

hello();
hello();

//2 functions at a time
function yahoo(){
    console.log("hello yahoo baba")
}
hello();
yahoo();




// //we can read individual obejct by giving them dot and bracket notation
// //dot notation
 const person={name:"john wick",
 Age:40, address:"nanded"}
console.log(person.age);

// //bracket notation
console.log(person["age"]);

 person.contact=634289698426;
 person["country"]="India";
 console.log(person);
  
// //we can read array by bracket notation
const letter=["A","B","C","D","E"]
 console.log(letter["0"]);  //giving index number here

// letter[0]:"a";
console.log(letter);

