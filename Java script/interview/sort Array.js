// Given an array of objects with a numerical property, implement function to sort the
// objects based on that property. Additionally, add a ranking to each object based on its
// position in the sorted array.

const prices = [
  { id: 1, value: 30 },
  { id: 2, value: 10 },
  { id: 3, value: 50 },
  { id: 4, value: 20 },
  { id: 5, value: 40 },
];

// for (let i = 0; i < prices.length - 1; i++) {
//   for (let j = i + 1; j < prices.length; j++) {
//     if (prices[i].value > prices[j].value) {
//       const temp = prices[i];
//       prices[i] = prices[j];
//       prices[j] = temp;
//     }
//   }
// }

// for (let i = 0; i < prices.length; i++) {
//   prices[i].rank = i + 1;
// }

// console.log(prices);

const data = [...prices].sort((a,b)=> a.value -b.value).map((item, index) => ({...item, rank: index + 1 }));
console.log(data);
