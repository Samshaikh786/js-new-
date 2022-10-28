const todoinpt = document.getElementById("inpt");
//console.log(todoinpt.value);       //value is use for readung the text under input box just like we read text by innertext
const Addbtn = document.getElementById("btn");
const showlist = document.getElementById("showtodos");

function addTasks (){
    showlist.innerHTML= todoinpt.value;
    todoinpt.value = "";
}
