const buttons=document.querySelectorAll(`.button`)
const body=document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener(`click`,function(e){
        console.log(e)
        console.log(e.target)

// ----------------------using if case-----------------------------//

        // if(e.target.id===`grey`){
        //       body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id===`red`){
        //       body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id===`blue`){
        //       body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id===`yellow`){
        //       body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id===`purple n`){
        //       body.style.backgroundColor=e.target.id;
        // }

// --------------------using switch case-----------------//

        switch (e.target) {
            case grey:
                body.style.backgroundColor=e.target.id;
                break;
                case red:
                body.style.backgroundColor=e.target.id;
                break;
                case blue:
                body.style.backgroundColor=e.target.id;
                break;
                case yellow:
                body.style.backgroundColor=e.target.id;
                break;
                case purple:
                body.style.backgroundColor=e.target.id;
                break;
            default:
                break;
        }
    })
});