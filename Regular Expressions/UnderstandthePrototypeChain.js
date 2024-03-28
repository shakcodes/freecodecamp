function Dog(name) {
    this.name = name;
  }
  Dog.prototype={
    constructor:Dog,
    numLegs:4
  }
  let beagle = new Dog("Snoopy");
  let legs=beagle;
//   Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
 console.log(Object.prototype.isPrototypeOf(Dog.prototype));
 console.log(legs.numLegs);