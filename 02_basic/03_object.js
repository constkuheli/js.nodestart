//singleton is a object(that is creat by the constr8uctor)
//object.create

/************************************************************************************** */
//object literals

const mySym = Symbol("key1")//define symbol as //************************************* */

const jsUser = {  // here takes all the key as string
    name: "kuheli",
    "full_name": "kuheli manna",
    [mySym]: "mykey1",//it refer that mySym is a symbol
    age: 19,
    location: "kolkata",
    email: "kuheli@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full_name"]);
//access symbol as this way********************************************
console.log(jsUser[mySym]);

jsUser.email = "kuheli1@gmail.com"
// Object.freeze(jsUser)//after freeze no changes will be found in this object
jsUser.email = "kuheli2@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(" ");
// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());