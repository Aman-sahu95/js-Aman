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

//console.log(typeof myFunction);







//----------------stack(primitive),heap(non-primitive)---------------//

let myYoutubename="Amansahu"

let anothername=myYoutubename
anothername="ayushsahu";

//console.log(myYoutubename);
//console.log(anothername);

let userone={
    email:"asahu@1234.com",
    upi:"2345@"
}
let usertwo=userone

usertwo.email="ayusg@45.com"

console.log(userone.email);
console.log(usertwo.email);