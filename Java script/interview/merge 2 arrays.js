// There are two arrays one is of users and other is of cities they live in,
// make a new array which contains the unified data

const users = [
  { id: 1, name: 'John', age: 24 },
  { id: 2, name: 'Johnny', age: 29 },
  { id: 3, name: 'John ke chacha', age: 21 },
];

const cities = [
  { id: 11, city: "surat" },
  { id: 2, city: "baroda" },
  { id: 3, city: "mumbai" },
];

const data = users.map(item1 => ({...item1, ...cities.find(item2 => item1.id === item2.id)}));
console.log(data);