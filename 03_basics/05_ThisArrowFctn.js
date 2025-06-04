// this works on current context

const user={
    userName: "suryansee",
    price:199,
    welcomeMessage:function(){
      //  console.log(`${this.userName}, welcome to website`);
       // console.log(this);
    }
}
user.welcomeMessage();
user.userName="Sam";
user.welcomeMessage();

//console.log(this);
const chai=function(){
    let username="rishi";
    //console.log(this);// global object,  In non-strict mode, this will refer to the global object (window in browsers, global in Node.js).
//                        In strict mode ("use strict"), this will be undefined.
    // console.log(this.username); //undefined
}
  //chai();


const chai2=()=>{
    let username="rishi";
    //console.log(this);//{} output is empty braces
   // console.log(this.username);// undefined-output
}
//chai2();//

//const addTwo= (num1,num2)=>{
  //  return num1+num2;
//}
//conscole.log(addTwo(3,4));//     output- 7



//************************IMPLCIT RETURN ********************************//
// No need to braces and return
// in curly braces return is must ,  in () bracket return is no need

const addTwo= (num1,num2)=>  (num1 + num2);
conscole.log(addTwo(3,4));//7
