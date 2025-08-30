//--------------------singleton-----------------------//

//-------------------object literala-------------------//

const mySymbol=Symbol("key1")

const user={
    name:"Aman",
    age:"21",
    email:"asahu@gmail.com",
    lastloggedin:["monday","sunday"]
}

//  console.log(user.email);
// console.log(user["email"]);
// console.log(user["age"]);
// console.log(user.name); 

user.greet=function(){
    console.log("hello user");

}
user.greettwo=function(){
 console.log(`hello user,${this.name}`);
}

console.log(user.greet());
console.log(user.greettwo());