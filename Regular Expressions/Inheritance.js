function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
    
  };
  function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck=Object.create(Animal.prototype); // Change this line
let beagle=Object.create(Animal.prototype); // Change this line
let bear=Object.create(Animal.prototype);
duck.eat();
beagle.eat();
bear.eat();