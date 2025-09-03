//---------------------------Reduce--------------------//

const myNum=[1,2,3,4,5]

// const newnum=myNum.reduce(function(acc,curr){
//     console.log(`acc: ${acc} and curr: ${curr}`)
//     return acc+curr
// },0)
// console.log(newnum);

// const newnum=myNum.reduce((acc,curr)=>acc+curr,0);

// console.log(newnum);


// --------------add price of shopping by using reduce method----------------//

const shopping=[
    {
        item:"js",
        price:999
    },
    {
        item:"js py",
        price:999
    },
    {
        item:"js science",
        price:2999
    },
    {
        item:"js data",
        price:1999
    }
]
const shipping=shopping.reduce((acc,i)=>acc+i.price,0)

console.log(shipping);