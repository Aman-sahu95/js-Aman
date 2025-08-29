//-----------------------Dates----------------------//

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
//----------------------------------------------------------------------
//let myCreateDate=new Date(2025,0,25)
//console.log(myCreateDate.toDateString());

// let myCreateDate=new Date("2025-8-20")
//-------------------------------------------------------------------------------
//let myCreateDate=new Date("01-14-2025")

// console.log(myCreateDate.toLocaleString());

// -------------------------------------------------------------------

let myCreateDate=new Date("01-14-2025")
let MyTimeStamp=Date.now()

// console.log(MyTimeStamp.getTime());-----------confusion
//console.log(Date.now());

//console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString(`default`,{
    weekday:"long",
    
})
