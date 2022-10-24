const inputbox = document.getElementById("inpt");
const addbtn= document.getElementById("btn");
const showdiv = document.getElementById("displaylist");

addbtn.addEventListener("click", function(){
    const newTask = document.createElement("p");
    newTask.innerHTML = inputbox.value;
    showdiv.appendChild(newTask);
    //showdiv.append(newTask , "hello world")
    console.log(newTask);
    inputbox.value = "";
    newTask.addEventListener("click" , function(){
        newTask.style.textDecoration = "line-through";
        newTask.style.textDecorationColor = "green";

    });
    newTask.addEventListener("dblclick" , function(){
        showdiv.removeChild(newTask);
    })
});
