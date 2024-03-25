let arr=[9,40,61,95,79,9,50,80,63,109,42,9];
    //   0  1  2  3  4 5  6  7  8  9   9 10
const commonElem=arr.filter((num,index)=>arr.indexOf(num)!==index);
console.log([...new Set(commonElem)]);