// there are two ways to declare objects 1. using constructor , 2. using literals.
// singleton// have only one object
//Object.create


// when we declare object using literals then it has not singleton object although it has multiple objects

const mySym=Symbol("key1");/// very important for interviews perspective

const jsUser={
    name:"suryansee",
    age: 20,
    location:"bhopal",
    email:"suryansee@google.com",
    [mySym]:"myKey1",
    isLoggedIn: false,
    lastLogin_days:["Monday","Saturaday"]

}
//console.log(jsUser["email"]);
//console.log(jsUser.email);
//console.log(jsUser[mySym]);
//console.log(typeof(jsUser[mySym]));
//console.log(jsUser[mySym])
//console.log(typeof(typeof jsUser[mySym]));
//jsUser.email="pariharsurya@google.com";
//console.log(jsUser["email"]);
//Object.freeze(jsUser);
//console.log(jsUser["email"]);
//jsUser.name="suryansee singh parihar";
//console.log(jsUser["name"]);
//console.log(jsUser);
jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greetingsTwo=function(){
   console.log (`Hellow js User,${this.name}`);
}
console.log(jsUser.greeting);// [Funtion (anonymous) ]
console.log(jsUser.greeting());// hello js user
//console.log(jsUser.greetingsTwo);
//console.log(jsUser.greetingsTwo());

