const myHeros=["iron","thor","men"];
const dc=["super","flash","batman"];

//------------------------------------push()----------------------------//

//myHeros.push(dc)

// console.log(myHeros);
// console.log(myHeros[3][1]);

//-------------------------------------concatination(concat)------------------------//

// const myHero=myHeros.concat(dc);
// console.log(myHero);

//--------------------------spread(...)--------------------------------------//

const allHero = [...myHeros, ...dc];
//console.log(allHero);

//const another=[1,2,3,[4,5,6],[7,8,9,[4,5]]];

//-------------------------------Flat(infinity)or so on----------------------------//
//-----------sub array ko merge kar deta hai flat mai no. likhke or infinity etc.----------//

//const newone=another.flat(Infinity);

//console.log(newone);


console.log(Array.isArray("Aman"))
console.log(Array.from("Aman"));
console.log(Array.from({name:"Aman"}));

const another=["Aman sahu kumar"]
const newone=another.toFindIndex(isLargeNumber);

console.log(newone);