//--------------------------array------------------


const myArr=[0,1,2,3,4,5]
const myHeros=new Array(1,2,3,4,5,6)
console.log(myHeros[1]);


//--------------Array Methods---------------------//

// myArr.push(7)
// myArr.pop()
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))

// const newArr=myArr.join()
// console.log(typeof newArr);

// console.log(myArr);

//----------------------slice,----splice----------------//

console.log("A",myArr);

const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);
console.log("c",myArr);
console.log(myn2);