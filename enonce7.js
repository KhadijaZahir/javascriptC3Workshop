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


    /* function rangeOfNumbers (startNum, endNum){
    let arr = [4,6];
    let start = arr.unshift(startNum);
    let  end = arr.push(endNum);
    startNum <= endNum;
    console.log(arr);
   return(arr)

} 
 rangeOfNumbers(3, 20); */
