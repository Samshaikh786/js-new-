//VAR
//LET
//CONST

//vanilla function(normal old version of function)



//arrow function
const getname = (lname) => {
    return lname;
};
console.log(getname("wick"));

//example
const valueArray = [1,2,3,4,5,6,7,8];

const mapped = valueArray.map((item) => {
    return item + "a"
} );
console.log(mapped);

const value2 = [6537,63287,87623,6486];

const mapp2 = value2.map((item)=>
{
    return item + "sam"
});
console.log(mapp2);

//Rest Operator(how to make sum of multiple elements)
const getTotal = (...rest)=>{         //we can give any name to rest as per wish and it should be at last place with three mention dots
    const restsum = rest.reduce((acc , cur) => acc + cur);
    return restsum;
      
};
console.log(getTotal(578,57,632876,7836287,63876,7676));

//example2



//Spread Opretor(it will join two arrays)
const nums=[40,100,645,6576,87687];
const letters = ["a","b","c"];     //if we add any thing other than what is in first variable then in return it will give vlues of old an dalso add new ones.
console.log([...letters,20,200, ...nums]);



//example2 of spread operator
const personfname = { fname :"john"};
const personlnam = { lname : "wick"};
const personDataTwo = {...personfname,...personlnam};
const personDatathree = {...personDataTwo, phone:648765876};
console.log(personDatathree);


//example3
const formdetails = {nameofperson :"john wick"};
const formdetails2 ={address : "india"};
const completeform = {...formdetails,phone:7687687,email:"johnwick@gmail.com" , ...formdetails2};
console.log(completeform);

//Default parameters(latest feature and can be ask in interview)
function calculateInterest(proncipal,years,rate = 0.1){    //here default value for rate is given if it doesnt mention by user it will automatically take this default value
    const months = 12;
    const interest = proncipal/months * rate * (years*months);
    return interest;
}
console.log(calculateInterest(10000,2,0.2));   //and if we give value to the rate here then it will take what is mentioned by user

//example2
function calculateInterest2(p,n,r){
    r = undefined || 0.1;               //it is also deafult parameter
    const m=12;
    const i=p/m*r*(n*m);
    return i;
}
console.log(calculateInterest2(10000,2));



