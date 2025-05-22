//const tinderUser=new Object();

const tinderUser={};// it is also an empty objecgt

tinderUser.id="123abc";
tinderUser.name="sammy";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);// return empty object

const regularUser={
    email:"suryansee@google.com",
    fullName:{
        userFullName:{
            firstName:"Suryansee",
            lastName:"Singh_Parihar"
        }
    }
}
//console.log(regularUser.fullName.userFullName.firstName);
//console.log(regularUser.fullName.halfFullName?.userFullName);// this is called optional chaining,used instead of unexisting value that is not present
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj3={obj1,obj2};


