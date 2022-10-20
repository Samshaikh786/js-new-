//loops
//for
//example
for(let i = 1; i <= 10; i++){
   // console.log("2 * " + i + " = " + 2 * i);

}
//example
const letters= ["A","B","C","D","E","F"];

for(let i = 0; i < letters.length; i++ ){
   // console.log(letters[i] + letters[i + 1]);
   if (i % 2 === 0){
    console.log(letters[i]);
   }
}

let str="";
for(let i=0; i>10, i++){
    str = str + ".";
    console.log(str);
}

//while []
let sum = 0;
while (sum < 10 ){
    sum++;
    console.log(sum);
}


//do while (in do case atleast one time code will run even after condition is wrong)
let sum = 0;
do{
    console.log(sum);
    sum++;
} while (sum < 10);

const valueobj = { valueone:10, valuetwo:20, valuethree:30, valuefour:40}
//obj.valuetwo = obj.valuetwo / 2;
//console.log(valueobj);


//FOR IN is used for object
for (let a in valueobj){
   // console.log(onj[a]);
   valueobj[a] = valueobj[a] /2;
}
console.log(valueobj);

//FOR OF is used for arrays
const valueArray = [1,2,3,4,5,6,7,8,];
for (let b of valueArray){
    console.log(b * b);
}

//ONlY FOR
for (let i = 0; i < valueArray.length; i++){
  console.log(valueArray[i] * valueArray[i]);}

  


