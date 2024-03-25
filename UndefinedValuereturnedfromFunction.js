// Setup
var sum = 0;

function addThree() {
  sum += 3;
}

// Create the addFive function and remove any return statement:
function addFive() {
  sum += 5; // Add 5 to the sum variable
}

// Call both functions to modify the sum
console.log(addThree());
console.log(addFive());

console.log(sum); // Output should be 8