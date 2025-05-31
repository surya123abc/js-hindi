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
    const userName="Rishi"
}