// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return console.log("Not Equal");
    }
    return console.log("Equal");
  }
  
  testNotEqual(99);
  testNotEqual("99");
  testNotEqual(12);
  testNotEqual("12");
  testNotEqual("bob")
  //==========================================**************************==========================================
  // Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return console.log("Not Equal");
    }
    return console.log("Equal");
  }
  
  testStrictNotEqual(10);
  testStrictNotEqual("17");
  testStrictNotEqual(17);
  testStrictNotEqual(12);
  testStrictNotEqual("bob");