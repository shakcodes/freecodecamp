function bouncer(arr){
    let filterarray=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            filterarray.push(arr[i]);
        }
    }
    return filterarray;
}
console.log(bouncer([7, "ate", "", false, 9]));