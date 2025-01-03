/* make an array of objects representing items, 
  filter the items based on a specific condition 
  (e.g., items with a certain property value) and 
  transform the filtered data into a new format. */

// const products = [
//   { id: 1, name: 'Laptop', price: 999, inStock: true },
//   { id: 2, name: 'Smartphone', price: 399, inStock: false },
//   { id: 3, name: 'Tablet', price: 199, inStock: true },
//   { id: 4, name: 'Headphones', price: 99, inStock: false },
//   { id: 5, name: 'Camera', price: 599, inStock: true },
// ];

// const inStock = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].inStock) {
//     inStock.push(products[i]);
//   }
// }

// const final = [];
// for (let i = 0; i < inStock.length; i++) {
//   final.push({
//     name: inStock[i].name,
//     price: inStock[i].price
//   });
// }
// console.log(final);

const ans = products.filter(item => item.inStock).map(item => ({name: item.name, price: item.price}));
console.log(ans);
