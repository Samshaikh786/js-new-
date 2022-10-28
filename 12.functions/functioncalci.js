


const calculateloan = (p, r,y)=>{
    let n = 12;
   const intrstAmount = (p / n) * r * (n * y);
   const paybleAmount = p + intrstAmount;
   const emi = paybleAmount / (n * y);
   return (
    "payable Amount: " + paybleAmount + " interstAmount: " + intrstAmount.toFixed(2) 
    +  "emi: " + emi.toFixed(2)
   )
};
console.log(calculateloan(20000, 0.2, 3));

