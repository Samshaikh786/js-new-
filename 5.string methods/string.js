//slice
var get = "hello there    ";
var set = "this is me"
console.log(get.slice(6, 11));

//substring(same as slice but does not accepts negative value)
console.log(get.substring(6 ,11));

//substr(same as slice but needs starting index and how many character to be extracted)
console.log(get.substr(6, 5));

//replace (replcae any word by another which we mention)
console.log(get.replace("hello", "bye"));

//toUppercase(converts all in capital letters)
console.log(get.toUpperCase());

//toLower case(converts all in lower case)
console.log(get.toLowerCase());

//concat (it joins two strings)
console.log(get.concat(set));

//trim (helps to trim extra part)
console.log(get.trimEnd());

//padstart (supports padding at the beginning of the string)
//var met =" 234";
//console.log(met.padstart(6 , "0"));

//padend (helps to take padding at the end of the string)
//console.log(met.padEnd(7, "-"))

//ChartAt (this helps to get particular thing of any index)
console.log(get.charAt(3));

//split (split the string into many parts)
console.log(set.split(" "));

//length(shoe the lenght of string)
console.log(get.length);

//startswith (returns true or false)
console.log(get.startsWith("h"))

//endswith (returns true or false)
console.log(get.endsWith(" "))

//includes (show any argument in the string exist or not)
console.log(get.includes("there"))

//indexof (returns the index number of given value)
console.log(get.indexOf("o"))