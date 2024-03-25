//let catogrise the array
const array=["apple","banana","graps","guava"];
const nam={name1:"shakib",
            name2:"aqib",
            name3:"amir"};
for(let i=0;i<array.length; i++){
    if(array[i]=="banana"){
     console.log(nam.name3,"like to eat "+ array[i]);
    }else if(array[i]=="apple"){
        console.log(nam.name2,"like to eat "+ array[i]);
    }
    else if(array[i]=="guava"){
        console.log(nam.name1,"like to eat "+ array[i]);
    }
}