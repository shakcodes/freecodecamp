/*The unshift() method adds new elements to the beginning of an array.
The unshift() method overwrites the original array.*/
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray);
