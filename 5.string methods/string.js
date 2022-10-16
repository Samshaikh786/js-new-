//1 slice
var get = "hello there    ";
var set = "this is me"
console.log(get.slice(6, 11));

//2 substring(same as slice but does not accepts negative value)
console.log(get.substring(6 ,11));

//3 substr(same as slice but needs starting index and how many character to be extracted)
console.log(get.substr(6, 5));

//4 replace (replcae any word by another which we mention)
console.log(get.replace("hello", "bye"));

//5 toUppercase(converts all in capital letters)
console.log(get.toUpperCase());

//6 toLower case(converts all in lower case)
console.log(get.toLowerCase());

//7 concat (it joins two strings)
console.log(get.concat(set));

//8 trim (helps to trim extra part)
console.log(get.trimEnd());

//9 padstart (supports padding at the beginning of the string)
//var met =" 234";
//console.log(met.padstart(6 , "0"));

//10 padend (helps to take padding at the end of the string)
//console.log(met.padEnd(7, "-"))

//11 ChartAt (this helps to get mentioned element value by putting index number)
console.log(get.charAt(3));

//12 split (split the string into many parts)
console.log(set.split(" "));

//13 length(shows the lenght of string)
console.log(get.length);

//14 startswith (returns true or false)
console.log(get.startsWith("h"))

//15 endswith (returns true or false)
console.log(get.endsWith(" "))

//16 includes (show any argument in the string exist or not)
console.log(get.includes("there"))

//17 indexof (returns the index number of given value)
console.log(get.indexOf("o"))