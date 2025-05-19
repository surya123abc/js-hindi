// Dates---------

//let myDate=new Date();
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());// output------  5/15/2025, 2:20:24 AM
//console.log(typeof myDate);// object

//let myCreatedDate=new Date(2023,0,23);// dates in JS starting from '0'.
//console.log(myCreatedDate.toDateString());// output ---  Mon Jan 23 2023
//let myCreatedDate2=new Date(2023,0,23,5,3);
//console.log(myCreatedDate2.toLocaleString());// output---------------  1/23/2023, 5:03:00 AM
//let myCreatedDate3=new Date("2025-07-16");
//console.log(myCreatedDate3.toLocaleString());// output ------- 7/16/2025, 12:00:00 AM
let myCreatedDate4=new Date("07-16-2005");
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp=Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate4.getTime());
//console.log(myCreatedDate4.getTime());
//console.log(Date.now());
//console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());


`${newDate.getMonth()} the month is`;
newDate.toLocaleString('default',{
    weekday:"long",

})
