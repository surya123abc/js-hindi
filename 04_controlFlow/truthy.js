//const userEmail="suryansee@google.com"
//if(userEmail){
   // console.log("got email");// got email

//}
//else{
   // console.log("do not have email");
//}


//***********************FALSY VALUE *************************/

// false,0,-0, BigInt 0n, "", null, undefined, NaN

/// *****************TRUTHY VALUE*************************
    
//   "0",'false'," ", [], {}, function(){}


//const userEmail=[];
//if(userEmail.length==0){
   // console.log("Array is empty")
//}

//const emptyObj={};
//if(Object.keys(emptyObj).length===0){
 //   console.log("Object is Empty");
//}

//  Nullish Coalescing Operator(??)  // works on Only two keywords null, undefined

//let val1;
//val1=5 ?? 10  // 5
//val1=null ?? 10// null value ka safety check kr deta hai//   10

//val1= undefined  ??  7   //7
 //val1=   9 ?? undefined//9

 //val1= null ?? 2 ?? 6   // it will give 2 as an output, bcz it comes first


//console.log(val1);


//***************Turnary Operator  ?,: ************************** */


// SYNSTAX -----   (condition)?(true):(false);// like if else


//const money=1000;//  output--  less than 1500

const money=2000;
(money < 1500)?console.log("less than 1500"): console.log("greater than 1500");//  output--- greater than 1500


