//function calculateCartPrice1(num1){
   // return num1;
//}
//console.log(calculateCartPrice1(2));// there is condition when we have only 
// one parameter, but what will be happen if we have more than one argument so the solution is spread or rest operator

//function calculateCartPrice2(...num1){
 //  return num1;
//}
//console.log(calculateCartPrice2(100,200,500));// output----  [ 100, 200, 500 ]

function calculateCartPrice3(val1,val2, ...num1){
   return num1;
}
console.log(calculateCartPrice3(100,200,500,600,700)); //output------[ 500, 600, 700 ]


const user={
        userName:"suryansee",
        price:199
}
function handleObject(anyObject){
      console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);

}
//handleObject(user);
handleObject({
    userName:"umesh",
    price:199,
});

const myNewArray=[100,200,300,500];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(myNewArray));