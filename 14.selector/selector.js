//ID selection
//const idselection= document.getElementById("pTag");
//console.log(idselection);


//class name will always return in html element or html collection.//
//const classSelection = document.getElementsByClassName("spanTag");
//console.log(classSelection);
//console.log(classSelection[0]); //for selecting particular index element.

//QuerySelection (have to mention by id or class differently)
//Element with an id( # )
//const querySelection = document.querySelector("#pTag");
//console.log(querySelection);

//Element with class( . )
//const querySelection2 = document.querySelection2(".spanTag");
//console.log(querySelection2);

//QuerySelectorAll
//for id
//const queryallselection = document.querySelectorAll("#pTag");
//console.log(queryallselection);

//for class//
const querySelectorAll2 =document.querySelectorAll2(".spanTag");
console.log(querySelectorAll2);

//tag selection//(for targetting tags)
const tagSelection = document.getElementsByTagName("p");
console.log(tagSelection);

//FOR ONLY SELECTING TAG ELEMENT (INNER ELEMENT)
const selectedPtag = document.getElementById("pTag");

function changeText() {
selectedPtag.innerHTML = "value have been over written";
}
console.log(selectedPtag.innerHTML);

const btn = document.getElementById(chngbtn);
btn.addEventListener("click", function(){
    btn.innerText="text has been changed";
});




