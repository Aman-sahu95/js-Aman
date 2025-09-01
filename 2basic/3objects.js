//--------const emailUser=new  Object()-----(singleton object)--------------//
//----------constUser=new Object{}-----(non-singleton object)---------------//

const user={}

user.id="123abcyd"
user.name="Aman"
user.logIn=false

// console.log(user);

const regular={
    email:"ertyujk@gmail.com",
    fullname: {
        username:{
            firstname:"aman",
            lastname:"sahu"
        }
    }
}
// console.log(regular.fullname);

const ojt1={1:"a",2:"b"}
const ojt2={3:"v",4:"c"}

// const obj3={ojt1, ojt2}
const obj3=Object.assign({},ojt1,ojt2)
// console.log(obj3);

const userfull=[
    {
        id:1,
        email:"aman@gmail.com"
    },
     {
        id:2,
        email:"aman@gmail.com"
    },
     {
        id:3,
        email:"aman@gmail.com"
    }
]

userfull[1].email
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// console.log(Object.hasOwnProperty("logIn"));


const course={
    coursename:"js in hindi",
    price:"678",
    courseid:"aman"
}


const {courseid}=course 

console.log(courseid);


