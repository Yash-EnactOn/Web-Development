const marvel_heros = ["spiderman", "IronMan", "Thor"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeroes = marvel_heros.concat(dc_heros);
// console.log(allHeroes);

const all_new_heroes = [...marvel_heros, ...dc_heros];
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, 13], 14]];
const ArrayX = another_array.flat(Infinity);
// const ArrayX = another_array.flat(3);
console.log(ArrayX);

console.log(Array.isArray("Yash"));
console.log(Array.from("Yash"));
console.log(Array.from({name: "Yash"})); // intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3));
