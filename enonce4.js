//Workshop 4 SOLUTION 1
    function cardCounting(card) {
        let count = 0;
        if(card > 1 && card < 7){
            count++;
        }
        else if(card <= 9){
             count = count;
        }
        else{
            count--;
        }
        if (count > 0){
            console.log(count + " Bet")
        // return count + " Bet"; //dont know we use it
        }
        
        else{
            console.log(count + " Hold")///
            // return count + " Hold";// dont know why we use it
        }
    }
    cardCounting(2);


//Workshop 4 SOLUTION 2


/* var count = 0;

function cc(card) {
if (card >= 2 && card <=6){
count ++;
console.log(count + ' Bet');

} else if (card >= 7 && card <= 9){
console.log(count + ' Hold');

} else if(card == 10,'J','Q','K','A'){
count --;
console.log(count + ' Hold');

} else{

return "other";
}
}

cc(9);
 */