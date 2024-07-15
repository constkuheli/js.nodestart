const marvel_heros = ["thor","Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)// it concatinate the  whole array as  an  element of data

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

console.log("concatination ");

const allheros = marvel_heros.concat(dc_heros) //concate merge the two array
console.log(allheros);

//spred those array __ same as concatination
const all_new_array = [...marvel_heros, ...dc_heros]
console.log(all_new_array);

//if we want to array under array to  only one array then we use flat

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,1,[6]]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//for checkig the arrrayis an array or not

console.log(Array.isArray("kuheli"));
console.log(Array.from("kuheli"));//use for convert the string i to an array

console.log(Array.from({name: "kuheli"})); //interestinng

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//for making an array by using valiables

