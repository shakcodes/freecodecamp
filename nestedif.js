const myArray = [["aqib","doctor"],["shakib","engineer"]];
console.log(myArray);
for(let i=0;i<myArray.length;i++){
    for(let j=0;j<myArray.length;j++){
        if(myArray[i][j]=="doctor"){
            console.log(myArray[i]);
        }else if(myArray[i]=="shakib"){
            console.log(myArray[i]);
        }
    }
}
const data=myArray[1];
console.log(data);