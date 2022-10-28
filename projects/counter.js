let counter=0;

const countvalue=document.getElementById("value");
const counterbtn= document.querySelectorAll(".btn");

//console.log(counterbtn);
counterbtn.forEach(function(btn){
    btn.addEventListener("click",function(e){      //e is for synthetic event
        //console.log(e.target.classlist);
       const listOfClasses = e.target.classList;
        // const listOfClasses = btn.classList;
        if(listOfClasses.contains("increase")){
            counter++;
        } else if (listOfClasses.contains("Decrease")){
            counter--;
        } else {
            counter=0;
        }
        countvalue.innerHTML = counter;


        //console.log(listOfClasses);
        //console.log(btn.innerHTML);
        // if(btn.innerHTML === "Increase"){
        //     counter++;
        // } else if (btn.innerHTML === "Decrease"){
        //     counter--;
        // } else{
        //     counter=0;
        // }
        // countvalue.innerHTML = counter;
    });
});

