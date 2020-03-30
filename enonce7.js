// Workshop 7

 let arr = [];
 function rangeOfNumbers (startNum, endNum){
    if(startNum <= endNum){
        arr.push(startNum);
        rangeOfNumbers(startNum + 1, endNum);
    }
    return arr;
} 
 rangeOfNumbers(6, 9);
 
    console.log(arr);


    