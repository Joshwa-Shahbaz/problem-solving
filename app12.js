// Problem: Sort an array of objects based on a specific property value in descending order.
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
  { name: 'Dave', age: 35 }
];

const check = people.sort((a,b) => b.age - a.age)
console.log(check)
// Expected output: [{ name: 'Dave', age: 35 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]