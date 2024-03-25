function randomFraction() {

    // Only change code below this line
  
    let result = 0;
    while (result === 0) {
      result = Math.random();
    }
  
    return console.log(result);
  
    // Only change code above this line
  }
//   randomFraction();
  function randomWholeNum() {
    var number= Math.floor(Math.random()*10);
    console.log(number);
  }
//   randomWholeNum();
// You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.
function randomRange(myMin, myMax) {
     const range=Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
     console.log(range);
  }
  randomRange(1, 10);