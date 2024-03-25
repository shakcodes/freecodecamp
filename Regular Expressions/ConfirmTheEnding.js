function confirmEnding(str, target) {
  let lastChar=str.length-target.length;
  console.log(lastChar);
    return str.slice(lastChar)===target;
  }
  
 console.log( confirmEnding("Bastian", "n"));
 console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));