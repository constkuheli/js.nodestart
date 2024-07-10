const score = 400
console.log(score);

const bBalance = new Number(1000.3546)
console.log(bBalance);

console.log(bBalance.toString().length);
console.log(bBalance.toFixed(2));//for fixing precision value

console.log(bBalance.toPrecision(5));
console.log(bBalance.toPrecision(3));

const otherNumber = 123.890
console.log(otherNumber.toPrecision(3));//124

const hundreds = 10000000
console.log(hundreds.toLocaleString());//us standrad
console.log(hundreds.toLocaleString('en-IN'));//indian money formate

//+++++++++++++++++++++++++++++++++++++++++++++maths+++++++++++++++++++++++++++++++++++++++++++++

console.log(" ");
console.log("maths  ");

console.log(Math);
console.log(Math.abs(-7));//negative trun into positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));//celing value means always choose the upper value//5
console.log(Math.floor(4.9));//take lower value//4
console.log(Math.max(4, 9, 17));

console.log(Math.random());//random value  always comes between 0 & 1
console.log((Math.random()*10 )+1);//i want the value is  must be bigger thn 1 so i add 1
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);