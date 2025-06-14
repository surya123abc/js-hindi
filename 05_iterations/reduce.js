const myNums=[5,4,3,2,1];

//array.reduce(callbackFn, initialValue)
// const initialValue=0;
//const sumWithInitial=array.reduce( (accumulator,currentValue) =>accumulator + currentValue ,  initialvalue);


const myTotal=myNums.reduce(function(acc, currVal){
    //console.log(`acc : ${acc} and currVal : ${currVal}`);
    return acc + currVal;
},0)
//console.log(myTotal);


//***************OUTPUT************************ */

//acc : 0 and currVal : 5
//acc : 5 and currVal : 4
//acc : 9 and currVal : 3
//acc : 12 and currVal : 2
//acc : 14 and currVal : 1
//15


const shoppingCart=[
    {
        itemName:"Js course",
        price: 999
    },
    {
        itemName:"py course",
        price: 1999
    },{
        itemName:"Mobile Development course",
        price: 12000
    },{
        itemName:"Data Science course",
        price: 999
    },
];

const priceToPay=shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay);

