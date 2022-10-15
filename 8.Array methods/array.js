//find
const shapes = ["up", "down", "left", "behind","front"]

console.log(shapes.find(function(abc){
    return abc === "left"
}))

//findindex
console.log(shapes.findIndex(function(xyz){
    return xyz === "left"
}))

//Some
const nums = [21,30,40,80,3689]
console.log(nums.some(function(anything){
    return anything > 0;
}))

//Every
console.log(nums.every(function(anything){
    return anything >= 0;
}))

//filter
const prodcuts =[ "Apple","Adidas","Woodland","Samsung","samsung","puma","Adidas","Apple","puma","Adidas", "Apple"]
console.log(prodcuts.filter(function(item){
    return item === "Apple" || item === "Adidas";
}))

//map(will return in array)
console.log(prodcuts.map(function(item){
    //return item + "..";
    return item.slice(0,3) + ".." + item.slice(-4,-1);

}))

//foreach (will not return in array but individually)
console.log()


//reduce
const numsb = [1,2,3,4,5,6,7,8,9,10]
console.log(numsb.reduce(function(acc, cur){
    return acc + cur *2;
},0))

//sort
console.log(prodcuts.sort(function(a, b){
    return a.toUpperCase() > b.toUpperCase() ? -1 : 1 ;
}))



