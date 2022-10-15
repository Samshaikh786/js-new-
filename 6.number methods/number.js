//tostring (converts number into string)
const innumber = 100.99;
console.log(innumber.toString());

//toEXponencial (convert the big number in a small)
const total1= 100000;
console.log(total1.toExponential());

//tofixed(roundoff)
const total2= 33.56;
console.log(total2.toFixed());

//toprecision (according to given lenght)
console.log(total2.toPrecision(3));


//tonumber (returns a number as a number and there is no need to use it )
const best = "567";
console.log(best.valueOf());

//Number ParseIn and Parsefloat ( these are not number methods but a global javascript methods)
//Number (can hellps to convert javascript variable into number)
const yes = "10002.33";
console.log(Number(yes));

//ParseIn (parses a string and returns a whole number or we can say it will round off)
console.log(parseInt(innumber));

//parsefloat (returns a string of number as it is)
console.log(parseFloat(innumber));




