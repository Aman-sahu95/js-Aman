const name="Aman";
const repocount=50

//console.log(name + repocount + "value");

//console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String(`Aman-sahu`);
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//------------------------lenght,toUpparcase(),charAt(),indexof(``)--------------//


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf(`m`));

//------------------substring-------------//

const newString =gameName.substring(0,4)
console.log(newString);

//-----------slice------------//

const anotherString=gameName.slice(-7,4)
console.log(anotherString);


//----------------trim----------------//


const newStringone="  Aman  "
console.log(anotherString);
console.log(newString.trim());

const url="https://chatgpt.com/c/68921c7e-5e00-8011-bfba-9e908f662658"

console.log(url.replace(`%20`,`-`))