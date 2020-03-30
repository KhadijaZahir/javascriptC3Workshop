//Workshop 3
let arr = [1, 2, 3];

function nextInline(arr, item){
    console.log(arr);
    let add = arr.push(item);
    let del = arr.shift();
        console.log(del);
    return(del); //dont understand why u write it it has no role
}nextInline(arr, 6);
console.log(arr);

// autre solution from freecodecamp

/* var Arr = [1,2,3,4,5];

function nextInLine(Arr, item) {
    Arr.push(item);
    Arr.shift();
    return item;
  }
  
  // Display code
  console.log(Arr);
  console.log(nextInLine(Arr, 6));
  console.log(Arr); */
  