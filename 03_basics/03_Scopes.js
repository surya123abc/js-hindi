//let a=10;
const b=200;
var c=300;       /// this is global scope
let a=500;

if(true){

let a=40;
const b=50;
var c=60;
   
console.log("a =",a);
console.log("b =",b);

}
console.log(a);// not defined bcz it has blocked scope and can not be Accesible out side the block
console.log(b);// same here
console.log(c);// 60 bcz var has a global scope it has become the part of window object and can be accessible inside or outside the scope
