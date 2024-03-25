const magic = () => {
    const data=new Date();
    return console.log(data);;
  };
  console.log(magic);
//   arrow function with parameters
  const myConcat = (arr1, arr2)=> {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));