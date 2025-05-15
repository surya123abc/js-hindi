const score=400;
console.log(typeof score);

const balance=new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));// used to control the pricision value
const otherNumber=12.8966;
console.log(otherNumber.toPrecision(3));
const otherNumber2=212.8966;
console.log(otherNumber2.toPrecision(3));
const otherNumber3=3212.8966;
console.log(otherNumber3.toPrecision(3));// Returns a string containing a number represented either in exponential
//  or fixed-point notation with a specified number of digits.
const hundreds=100000000;
console.log(hundreds.toLocaleString());//output--- 100,000,000  separated with comma  [Converts a number to a string by using the current or specified locale].
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++ Maths+++++++++++

console.log(Maths);
console.log(Maths.min(4));
console.log(Maths.abs(-4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.round(4.6));


