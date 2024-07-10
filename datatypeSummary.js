//premitive

//7 type: String, Number, Boolean, Null, Undefined, Symbol, BigInt

 

//reference(Non primitive)

//Array, Objects, Functions

//array
const heros = ["sk", "pk", "yk"];
 
//object- store in key value pairs
 
let myobj = {
    name:"kuheli",
    age: 19,
}

 //function
 
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros)

//all the non premitive datatype shows as object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(premitive)  Heap(non premitive)


//in the stack
let myYoutubename = "kuhelidotcom";
let anothername = myYoutubename;
anothername = "sunnydotcom"

console.log(anothername);
console.log(myYoutubename);


//in the heap
let userone = {
   email: "user@gmail.com",
   upi: "user@sbi",
}

let usertwo = userone;

usertwo.email = "kuheli@gmail.com"

console.log(usertwo.email);
console.log(userone.email);

//here both the value change because its comes from  heap reference to the stack
