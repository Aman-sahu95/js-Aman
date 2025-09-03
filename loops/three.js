// --------------------------for of----------------------------------//

const arr=[1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}


const greet="hello !"

for (const i of greet) {
    console.log(`each char is ${i}`);
}


// ---------------------Maps---------------------------//
// ----map is a object jo key value ko hold karta hai---------------------//
// ------------is will have a unique value-----------------------------//

const map=new Map()
map.set(`IN`,"INDIA")
map.set(`US`,"State")
map.set(`Fr`,"Rassia")


console.log(map);

for (const [key,value] of map){
    console.log(key,`:-`,value);
}

const myObject={
    game1:`nfs`,
    game2:`spider`
}
// for (const [key,value] of myObject){
//     console.log(key,`:-`,value);
// }

