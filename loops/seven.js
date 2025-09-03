
// -------------------Map is a call back function ---------------------------------//

const myNumber=[1,2,3,4,5,6,7,8,9,10]
//  const newnum=myNumber.map((num) => {
//     return num+10
//  });
//  console.log(newnum)

// --------------------chainig inthis we can use more then two mathod--------------//

const newnum=myNumber
.map((num)=>num*10)
.map((num)=>num+1)
.filter(num=>num>=40)
console.log(newnum);

