function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs:4,
    eat:function (){
      console.log("meat");
    },
    describe:function(){
      console.log("4 legs 2 ear 1 tail");
    }
  };
  console.log(Dog);