function frankenSplice(arr1, arr2, n) {
    // return arr2.splice(n)=arr1.slice();
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return console.log(localArray);
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);