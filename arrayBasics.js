var array = [3,1,1,3];
var nonArray = {};

console.log(Array.isArray(array));
console.log(Array.isArray(nonArray));

console.log(array.indexOf(2)); // -1
console.log(array.indexOf(3)); // 0
console.log(array.indexOf(1)); // 1
console.log(array.indexOf(1, 2)); // 2

console.log(array.lastIndexOf(2)); // -1
console.log(array.lastIndexOf(3)); // 3
console.log(array.lastIndexOf(1)); // 2
console.log(array.lastIndexOf(1, 2)); // 2