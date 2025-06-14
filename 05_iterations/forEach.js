//const coding=[5,6,8,3,9,7];
//const values=coding.forEach((item)=>{
 //   console.log(item);
    //return item;// forEach returns nothing gives  " undefined ""
//})
//console.log(values);


//const myNums=[1,3,2,5,67,7,8,];
//const newNums=myNums.filter((num)=>{    /// when we use filter it returns value and takes callback
   
   // return  num>4;
//})
//console.log(newNums);

//const myNums=[1,3,2,5,67,7,8,];
//const newNums=myNums.filter((num)=> num>4  ) /// when we have not using scope in callback so no need to  write return keyword
//console.log(newNums);


//myNums=[6,4,7,9,8,3,2,1,10,12];
//const newNums=[];
//myNums.forEach((num)=>{
      //if(num>4){
       // newNums.push(num);
      //}
//})
//console.log(newNums);



///**************************** map() ***********************************************


//const newNums=myNums.map((num)=>num+10)
//console.log(newNums);


///// ******************CHAINING******************************


const myNums=[10,20,30,40,50];
const newNum=myNums
.map((num)=>num*10)
.map((num)=> num+10) 


//console.log(newNum);

const myNumber=[10,20,30,40,50];
const newNumber=myNums
.map((num)=>num*10)
.map((num)=> num+10) 
.filter((num)=>num>=40)

console.log(newNumber);




