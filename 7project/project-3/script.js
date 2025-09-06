const clock=document.getElementById(`clock`)
// document.querySelector(`#clock`)




setInterval(function(){
let date=new Date();
// console.log(date.tolocaleTimeString());
clock.innerHTML=date.toLocaleDateString();
},1000)