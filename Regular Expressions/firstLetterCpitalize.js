function fisrLetterCapital(str){
    let array=str.split(' ');
    let capital=[];
for(let st in array){
    capital[st] = array[st][0].toUpperCase() + array[st].slice(1).toLowerCase();
}
    return capital.join(' ');
}
console.log(fisrLetterCapital("hello moto how are you?"));