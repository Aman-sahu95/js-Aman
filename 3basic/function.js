


function addTwoNumbers(number1, number2){

    // console.log(number1 + number2);
    let result=number1 + number2
    return result
}
const result=addTwoNumbers(3,4)
// console.log("Result:",result);

function loginUser(username){
    return`${username} just logged in`
}

//console.log(loginUser("aman"));

//-----------------------------rest operator(...)-----------------------------------//

function calculateCarePrice(...num1){
    return num1
}
console.log(calculateCarePrice(200,400,500,800))


const user={
    username:"aman",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({
username:"aman",
price:399
})

const mynew=[200,300,400]

function mych(newarr){
    return newarr[1]
}
console.log(mych(mynew));


const myname=["aman","sony","kush","rajju"]

function mynum(myperson){
    return myperson[3]
}
console.log(mynum(myname));