// [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]
// i=row,j=column
// const arr=[[]]
function largestNo(array){
    let currentMax=array[0][0];
    const results = [];
    for(let i=0;i<array.length;i++){
        let largestNumber = array[i][0];
        for(let j=1;j<array[i].length;j++){
            if(array[i][j]>largestNumber){
                largestNumber = array[i][j];
            } 
        }
        results[i] = largestNumber;
    }
    return console.log(results);
}
largestNo([[6, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);