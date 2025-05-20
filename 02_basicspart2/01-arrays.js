// Array
// java script provides hetrogenious array support


// javaScript arrays are not primitives still they are Objects.

// javascripts's arrays are resisable and can contain mixed data types or hetrogenous data.
//javascript arrays are not associative arrays becuse array elements can be accessed by non-negetive  integers or called indices starting from 0 to n-1

//JavaScript array-copy operations create shallow copies.
//shallow copy means     A shallow copy of an object is a copy whose properties share
//  the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change
//  either the source or the copy, you may also cause the other object to change too.
//

//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) 

const myArray=["bulbul","sweta","priya","kiara"];
const test=[7,8,9,5,4,21];
const myArr= new Array(76,98,33,12);
//console.log(myArr[3]);
//onsole.log(myArray[3]);
//console.log(test[3]);
//myArr.push(13);
//myArr.push(15);
//console.log(myArr);
//myArr.pop();
//my
//myArr.unshift(9);//[ 9, 76, 98, 33, 12 ] it takes argument and shift one value
//myArr.shift();   //[ 98, 33, 12 ] it doesn't require any argument or parameter, it removes first element and shift the values by one

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(12));
const newArr=myArr.join();//copy the same elemnt and change them into String elemnt seperated with comma and removes square brackets

console.log(myArr);
console.log(newArr);
console.log(typeof myArr);//  [ 76, 98, 33, 12 ]object
console.log(typeof newArr);//     76,98,33,12 /string

// slice() and splice() methods

console.log("A", myArr);
const myn1=myArr.slice(1,3);//A [ 76, 98, 33, 12 ]++++++[ 98, 33 ] it start from given index and not include last index which have given

console.log(myn1);
console.log("B", myArr);
const myn2=myArr.splice(1,3);//B [ 76, 98, 33, 12 ]++++++[ 98, 33, 12 ] its a opposite of sile and include last value

console.log(myn2);