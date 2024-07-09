let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber);

// "33" => 33
// "33abc" => NAN
// true => 1; false => 0

let isLoggedIn = "kuheli"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"kuheli" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

//***************************************Operation****************************** 

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hiiiiii"
let str2 = "  hello"

let str3 = str1+str2
console.log(str3)

console.log(2 + "1")//21
console.log("2" + 1)//21
console.log("1" + 2 +3)//123//if first element is string thn all are treated as string
console.log(1 + 2 +"3")//33//if first is number thn the number addition work and last string operation done

