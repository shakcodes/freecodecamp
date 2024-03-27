function Dog(name) {
    this.name = name;
  }
  
  // Adding Some Extra Property using prototype Method
  Dog.prototype = {
  constructor:Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  let myDog = new Dog("Buddy");
  myDog.eat();
  myDog.describe();
Dog.prototype.eat();