// When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor=Bird;
Dog.prototype.constructor=Dog;


let duck = new Bird();
let beagle = new Dog();