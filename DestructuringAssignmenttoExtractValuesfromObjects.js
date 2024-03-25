const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today,tomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line
  console.log(today,tomorrow);
//   Use Destructuring Assignment to Assign Variables from Objects
// Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.
const {today:highToday,tomorrow:highTomorrow}=HIGH_TEMPERATURES; 
console.log(highToday,highTomorrow);