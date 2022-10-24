function parentFunction(){
    const age = 40;
    function childFunction(){
        //let weight = 100;
        console.log(age);
    }
    return childFunction()
    //return console.log(weight);
}
parentFunction();