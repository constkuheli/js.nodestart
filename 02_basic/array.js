//array

//array in js shallow copy (share the same reference)
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//array methods

myArr.push(6)
myArr.push(7)
myArr.pop()//remove the last value from array

myArr.unshift(9)//it add at start
myArr.shift()//remove the first element

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()// use for converting all the value in string

console.log(myArr);
console.log(newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);