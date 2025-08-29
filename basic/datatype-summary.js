//primitive//


//7 type:string,number,boolean,null,undefined,symbol,bigInt   ///

const score=100;
const scorevalue=100.3;

const isLoggedIn=false;
const outsideTemp=null;

const id=Symbol("12345");
const anotherId=Symbol("102345");

//console.log(id===anotherId);
//console.log(anotherId);

const bigNumber=23456789345634567n;


//  Reference (non primitive)  //


//Array,objects,function  //

const heros=["iron","thor","ak"];
let myCh={
    name:"Aman",
    age:21,
}

const myFunction =function()
{
    console.log("hello world");
}

console.log(typeof myFunction);