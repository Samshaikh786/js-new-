//if(false){
   // console.log("hello people");
//} else if(false){ console.log("whassup");}else{console.log("conditins doesnt match");}

//example
//const time= 18;

//if (time >= 6 && time < 12 ){
  //  console.log("good morning")
//}else if(time >= 12 && time > 18) {
  //  console.log("good afternoon")
//}else if (time >= 18 && time >= 20){
  //  console.log("good evening")
//}else (){
 //   console.log("good night")
//}
//
//const role="user";

//if(role ==="admin"){
 //   console.log("hello admin")
//} else if(role ==="owner"){
   // console.log("hello owner")
//} else if(role ==="guest"){
//    console.log("hello guest")
//} else{
 //   console.log("you dont belong here,get the hell out!")
//}

//short of if Else( called as ternally operator)
const time = 21 ;
time > 6
 ? console.log("If executed") 
 : console.log("else executed")


 //Template literal
console.log(`Time is ${time} am`);


//example
const role= "admin";
role == "admin" ? console.log("hello admin") : console.log("hello outsider");


//example
const posts= "director";
posts == "manager" ? console.log("managing all things") : posts == "director" ? console.log("directing the company") :console.log("none of business");