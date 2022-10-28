//object behaviour

//constructor function (most important)
function GetCircleArea(radius){
    this.pi = 3.14;
    this.radius = radius;
    this.getArea = function(){
        return this.pi * this.radius * this.radius;
    };
    return this;
}
const firstCircle = new GetCircleArea(10);    //{}making an empty object
console.log(firstCircle);
console.log(firstCircle.getArea());


function personDetails(fname,lnam,email,phone){
    this.fname = fname;
    this.lnam = lnam;
    this.email = email;
    this.phone = phone;
    return this;

}

const firstperson = new personDetails(
    "john","wck","dkjhkj@gmail.com",37687465
)
console.log(firstperson);