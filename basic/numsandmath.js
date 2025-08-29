const score=400
//console.log(score);

const balance=new Number(100)
//console.log(balance)
//----------------tofixed()--------------------------//
//-----we put the tofixed()value ofr mainly used in e-commerce website (.00)------  //


//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

//--------------toPrecision()----------------//
//--------------number ko round off kar deta hai ----------------------//


const otherNumber=123.7789

//console.log(otherNumber.toPrecision(3));

//-----------------------tolocaleString()------------------------------//
//---------------tolocaleString(`en-IN`),default value give US in doller----------//

const hundreds=10000000

//console.log(hundreds.toLocaleString(`en-IN`));



//----------------============  Math  ==================----------------//

//console.log(Math);

//console.log(Math.abs(-4));   //----------minus ka plus kar deta hai------//
//console.log(Math.round(4.6));//-----------round off---------//
//console.log(Math.ceil(4.4));  //-----------------round of karke badi value ko he deta hai--------//
//console.log(Math.floor(4.9));  //----------------round of karke choti value ko he deta hai jese(4.9 hai tab bhi 4 dega)-----//
//console.log(Math.min(4,3,7,2,9));  //-----------sabse chota no. -------------//
//console.log(Math.max(4,6,9,2,5));  //------------sabse bada no. -------------//


//----------------random--------------------//
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);

//--------isme 10 se 20 ke beech mai koi bhi value aa jati hai jab hamm random() value use karte hai-----//

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)+min));
