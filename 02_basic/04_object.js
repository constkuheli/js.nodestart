//object concept using singleton
// const tinderUser = new Object() //singleton object define as tha5t way

const tinderUser = {}//this is non singleton user
console.log(tinderUser);

tinderUser.name = "kuheli"
tinderUser.id = "1234abc"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email: "kuheli@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kuheli",
            lastname: "manna"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


//merge
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"c",6:"d"
}

// const obj3 = {obj1, obj2}//merge the object into an object
const obj3 = Object.assign({}, obj1, obj2, obj4)//use merge the two object
console.log(obj3);

//basicaly we use this aproach
const obj5 = {...obj1, ...obj2}
console.log(obj5);


//when value comes from database we use  this 
const users = [
    {
        id: 1,
        email: "fhyg.gmail.com",
    },
    {
        id: 1,
        email: "fhyg.gmail.com",
    },
    {
        id: 1,
        email: "fhyg.gmail.com",
    },
    {
        id: 1,
        email: "fhyg.gmail.com",
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//important
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//destructuring

const course = {
    coursename: " js course",
    price: "999",
    courseInstructor: "kuheli"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//API*****************************************************
//in json all key and value are treated as string
// {
//     "name": "kuheli",
//     "coursename": "js in hindi",
//     "price": "free"

// }
/*************read data from api 
    first go to the website "random userme api" another webpage copy the api and paste it in google and copy the api data and pgain go to the "json formatter" and paste the data on it and click on beautify/..
    read the concept from Here 
    ***************************/