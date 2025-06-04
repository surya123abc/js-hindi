// closure means the inner function can access the variables of outer function

function one(){
    const userName="suryansee singh parihar";

    function two(){
        const website="youtube";
        console.log(userName);
    }
    //console.log(website);// gives error because out of Scope,line no 8 pe error ke kard function two execute ni hua
    //two();
}
one();


if(true){
    const userName="Rishi";
    if(userName=="Rishi"){
        const website="youtube";
       // console.log(userName+website);
    }
    //console.log(website);//  error occurs due to out of scope
}
//  console.log(userName);//   error occurs due to out of scope



//++++++++++++++++++++++++++interesting+++++++++++++++++
console.log(addOne(5))// it will execute properly
function addOne(num){
    return num + 1;
}
//addOne(5);


addTwo(5);// we cant declare it
const addTwo=function(num){
    return num +2;
}
//addTwo(5);