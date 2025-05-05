let score="33";
let age="53abc";
let temp=null;
let kat=true;
let pat=undefined;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof(valueInNumber));

let valueInNumeric=Number(age);
console.log(typeof(age));
console.log(typeof(valueInNumeric));
console.log(valueInNumeric);// NAN is a special type of datatype


let numberValue=Number(temp);
console.log(typeof(numberValue));
console.log(typeof(numberValue));
console.log(numberValue);// gives result '0' when we assign null to any variable and when check value of it gives '0' 

let Value=Number(kat);
console.log(typeof(Value));
console.log(typeof(Value));
console.log(Value);


let VValue=Number(pat);
console.log(typeof(VValue));
console.log(typeof(VValue));
console.log(VValue);// NaN   , in case of string it also gives NaN because it can not be converted into integer


//Notes--------------------

//when change  in boolean

// 1=> true, 0=>false,  ""=>false ,  "suryansee"=>true


//