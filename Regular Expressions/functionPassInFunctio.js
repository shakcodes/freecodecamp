function findElement(arr,func){
    let num;
    
    
    for(let i=0;i<arr.length;i++){
        num=arr[i];
        if(func(num)){
            return num;
        }
    }
    return undefined;
}
console.log(findElement([1,7,3,4,5,10],num=>num % 2 ===0));