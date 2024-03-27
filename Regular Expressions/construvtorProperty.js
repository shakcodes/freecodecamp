function Dog(name) {
    this.name = name;
  }
let candi=new Dog("shakib");
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if(candidate.constructor===Dog){
    return true;
    }else{
      return false;
    }
  }
console.log(joinDogFraternity(candi));