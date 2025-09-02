// -------------for loop------------------------//

for (let i = 0; i <10; i++) {
    const element = i;
    if(element==5)
    {
       // console.log("5 is best number");
    }
    // console.log(element);
    
}

// console.log(element);------not accecable


for (let i = 0; i < 10; i++) {
    //console.log(`outer loop ${i}`);
  for (let j = 0; j < 10; j++) {
    //console.log(`inner loop ${j} and inner loop ${i}`);
    //console.log(i + `*`+ j + `=` + i*j);
  }
    
}

let arr=["iron","flash","man"];
//console.log(arr.length);
for (let index = 0; index <= arr.length; index++) {
    const element = arr[index];
   // console.log(element);
    
}





//------------------break and continue---------------------//

for (let i = 0; i <=20; i++) {
    const element = i;
    if(i==5){
        console.log(`detect`);
        break;
    }
    //console.log(element);
    
}



for (let i = 0; i <=20; i++) {
    const element = i;
    if(i==5){
        console.log(`detect`);
        continue;
    }
    console.log(element);
    
}

