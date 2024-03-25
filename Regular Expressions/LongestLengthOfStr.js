// function longeststr(str){
//     let split=[];
// for(let i=0;i<=str.length-1;i++){
    
//     split.push(str[i]);
// }
//      return split.length;

// }
// console.log(longeststr("The quick brown fox jumped over the lazy dog"));


//Find The Word in Which The Length of Word will be check?greater length wordBreak: 
function longestWord( str){
    let word;
    let lengthCount;
    let maxLength=0;
    word=str.split(' ');
    for(let i=0;i<=word.length-1;i++){
        if(word[i].length>= maxLength){
            lengthCount=word[i].length
            maxLength=lengthCount;
        }
    }
    console.log(maxLength);
}
longestWord("hello World shakibsidd");