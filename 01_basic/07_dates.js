//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)//0 means 1st month
console.log(myCreatedDate.toDateString());

//try yourself using many more creation

let myTimeStamp = Date.now()
console.log(myTimeStamp);//1st january 1970 to till now  the milisecond value

