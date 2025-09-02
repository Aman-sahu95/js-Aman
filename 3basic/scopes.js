//var c=300;

// if(true){
// let a=10;
// const b=20;
// var c=30;
// }

//console.log(a);
//console.log(b);
// console.log(c);

let a=300;

if(true){
let a=10;
const b=20;
//-----------console.log("inner",a);---------block scope-----------------jo if else ke ander ho-----//
}
//--------- console.log(a);--------------global scope--------------jo bahar ho------//

// for(let i=0;i<inner.length;i++){
//     const element=array[i];
// }

// -----------------------------------------------------------------------------------------//

// ---------------nested scopes------------------------------------//

function one(){
    const username="aman"
    function two(){
        const web="youtube"
        console.log(username);
    }
    //console.log(web);

    two()
}
//one()

if(true){
    const user="aman"
    if(user==="aman"){
        const web="youtube"
        //console.log(user+web);
    }
    //console.log(web);
}
// console.log(user);


//-----------------------------interesting-------------------------------//

//one(5)
//console.log(one(5));
function one(num){
    return num+1
}

//two(5)

const two=function(num){
    return num+2
}
