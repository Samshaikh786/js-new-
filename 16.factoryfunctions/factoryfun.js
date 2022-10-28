//area of circle
function getcirclearea(radius){
    return {
        pi:3.14, 
        radius,              //radius: radius,
        getarea()                      //getArea: function(){
            {return  this.pi * this.radius * this.radius;
        },

    };
};
const circlefirst = getcirclearea(10);
const circlesecond = getcirclearea(5);
console.log(circlefirst.getarea());
console.log(circlesecond);


 //area of rectangle
 function getRectangleArea(lenght,bridth){
    return{
        lenght,
        bridth,
        getareas(){
            return this.lenght * this.bridth;
        }
    }
 };
const rectfirst = getRectangleArea(15,9);
console.log(rectfirst.getareas());


function personDetails (fname,lname,email,phone){
    return{
        fname,
        lname,
        email,
        phone,
        getFullName(){
             return this.fname + this.lname
        }
    }
}


