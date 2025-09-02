//------Immediately Invoked 
//---global scopes ke pollution se  problem hoti kai bar toh uske variable ko hatane ke liye hamm IIFE ka use karte hai---//

//------syntax=>   () whole funtion ke liye}--{ ()function call ke baad-----------------//

//------------named IIFE--------------------------//
(function chai(){

    console.log(`DB connection`);
})();

//---------------------unnamed IIFE-------------------------------------//

( (name)=>{
console.groupCollapsed(`DB connection two ${name}`);
}

)(`aman`)