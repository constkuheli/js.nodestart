const name = "kuheli"
const repocount = 50
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);//string interpoletion

const gameName = new String(" kuheli manna ")//try into console//counting starting from 0

console.log("  ");
console.log("  ");
console.log("  ");

//some string prototype discussion

console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.split("" , 5));
console.log(gameName.slice(2 , 5));//startnum , endnum//end is not include
console.log(gameName.slice(-8 , -4));
console.log(gameName.blink());
console.log(gameName.repeat(3));
console.log(gameName.replace("heli" , "lpi"));
console.log(gameName.substring(0 , 4));//here not give the negative value
console.log(gameName.trim());//remove starting and ending space
console.log(gameName.charAt(4));
console.log(gameName.indexOf("i"));
console.log(gameName.includes("kuheli"));
console.log(gameName.includes("li"));