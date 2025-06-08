// IMMEDIATELY INVOKED FUNCTION EXPRESSION

// it is used to prevent for global scope pollution and if we want immediately execute or invoke function

(function chai(){

    // NAMED IIFE
    
   console.log("DB Connected");

})();//its necessary

//1.()- for definition  2. ()this is for execution

//( () => {
   // console.log(`DB Connected Two`)
//} )()



( (name) => {
   console.log(`DB Connected Two ${name}`)
} )("Rishi")