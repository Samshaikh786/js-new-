const something=["abc","bcd","efg","xyz","lmn"]
//tostring(converts array into string by seperating them by commas)
console.log(something.toString(" "));

//join(it joins arrays elements)
console.log(something.join("*"));

//pop(removes last element from an array and gives that one last element in result)
console.log(something.pop());

//push(adds a new element at the end of an array)
console.log(something.push("kjskj"));

//shift(its removes first element of an array and shifts all elements into lower case)
console.log(something.shift());

//unshift(add new elemnt at the beginning of an array and unshift all other elements)
console.log(something.unshift("yess", "no"));

//idexOf(this element checks the first elemnt of an array and gives index value of total array 
//if givem elemnt is not first element then it will return -1)
console.log(something.indexOf("kjskj"));

//lenght

//concat(merge two existing arrays and returns new array)
console.log(something.concat([1,2,3]));

//splice (it will add new element to an array it will return deleted value )
console.log(something.splice(2, 1,"a"))

//slice(take out one peice of an array by accepting its index value)
console.log(something.slice(0,2))

//reverse
console.log(something.reverse());