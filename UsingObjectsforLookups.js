// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    var lookup ={
      "alpha":"adams",
      "bravo":"boston",
      "charli":"chicago",
      "delta":"Denver",
      "echo":"Easy",
      "foxtrot":"Frank",
      "":"undefine"
    };
  result=lookup[val];
  console.log(result);
    // Only change code above this line
    return result;
  }
  
  
  phoneticLookup("charlie");
  phoneticLookup("alpha") ;
  phoneticLookup("bravo");
  phoneticLookup("charlie");
  phoneticLookup("delta"); 
  phoneticLookup("echo");
  phoneticLookup("foxtrot");
  phoneticLookup("");