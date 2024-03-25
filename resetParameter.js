const sum = (...args) => {
    //const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  console.log(sum(1,2,3));
  console.log(sum(1,2,3,4));
  console.log(sum(5));
  console.log(sum());