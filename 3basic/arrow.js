
// ------------------------------this------------------------------//
// -----------------------current contest ko run karta hai --------------//
// -------------scope ke under access karne ke liye this laga sakte hai----------//

// const user={
//     username:"aman",
//     prive:199,

//     msg:function(){
//         console.log(`${this.username} ,welcome`);
//         // console.log(this);
//     }

// }
// user.msg()
// user.username="sam"
//  user.msg()
// console.log(this);

// --------------------arrow function-------------------//
// ---------jo (this) function ke under hai or bo sirf object mai kaam karta hai function mai this ke sath (this.username) mai (undefind)show hota hai---//
// function chai(){
//     let username="aman";
//     console.log(this);
// }
// chai()

const chai=() => {
    let username="aman"
    console.log(this);
}
//chai()

// ---------------basic syntax of arrow function-------------//
// -------------const name=(num)=>{}--------------//
// ---------basices arrow function------------------------------//
// const two=(num1,num2)=>{
//     return num1+num2
// }
// console.log(two(3,4));

//----------------------------implicit return we don't use the parentesis{}in the function---------//

// const two=(num1,num2)=>  num1+num2

// console.log(two(3,4));

//-------------or-----------//
// const two=(num1,num2)=>  (num1+num2)

// console.log(two(3,4));
//

//-----------------------object {}--------------//
// const two=(num1,num2)=> ({username:"aman"})

// console.log(two(3,4));

