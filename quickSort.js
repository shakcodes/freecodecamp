function quickSort(array){
    if(array<1){
        return 0;
    }
    else{
        var left=[];
        var right=[];
        var newArray=[];
        var pivot =array[0];
        for(i=1;i<array.length;i++){
            if(array[i]<pivot){
                left.push(array[i]);
            }else{
                right.push(array[i])
            }
        }
    }
    return newArray.concat(quickSort(left),pivot,quickSort(right));
};
let arrays=[9,40,61,95,79,9,50,80,63,109,42,9];
const sort=quickSort([...arrays]);
    let sum = 0;
  for (let i = 0; i < sort.length; i++) {
    sum += sort[i];
}
const mean=()=>{
    return sum/arrays.length;
}
console.log(mean());
const medianItem=()=>{
    let item=Math.floor((arrays.length+1)/2);
    console.log(item);
    const median=((sort[item+item+1]+sort[item+item-1])/2);
    console.log(median);
}
medianItem();


