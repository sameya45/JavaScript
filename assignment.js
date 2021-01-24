//https://github.com/sameya45/JavaScript//


function kilometerToMeter(k){
    //Check input value is Negative or zero
     if( k< 1){
         
         return "Enter Valid Numeric Input";
     }
     else{
 
         var converstion = k*1000;
         return converstion;
        
     }
 
 }
 
 
 
 var result = kilometerToMeter(-2)
 console.log(result);







 function budgetCalculator(watch,mobile,laptop){
      
    // Check if any products numbers are negative or 0
     if(watch < 1 || mobile < 1 || laptop < 1){
        
        return "Plz Enter Valid Product Number";
     }
     else{
         var watchCost = watch*50;
         var mobileCost = mobile*100;
         var laptopCost = laptop*500;
         var sum = watchCost + mobileCost +laptopCost;
         
         return sum;
     }


}

var totalCost = budgetCalculator(5,6,-7)
console.log(totalCost);





function hotelCost(days){

    // 1-10 days cost 100 tk
    //11-20 days cost 80 tk
    //21 - rest days cost 50 tk
    var totalCost = 0;
    //check number of days is less then 1 or negative
    if(days < 1 ){
        return "Enter Valid Days" ;
    }
    else if (days <= 10){
        totalCost = days* 100;

        return totalCost;
    }
    else if(days <= 20){
        
            var firstCycleCost = 10*100;
            var remaningDays = days -10;
            var remaningCycleCost = remaningDays*80;
            totalCost = firstCycleCost + remaningCycleCost;

        return totalCost;

    }
    else{

        var firstCycleCost = 10*100;
        var secondCycleCost = 10*80;
        var remaningDays = days -20;
        var remaningCycleCost = remaningDays*50;
        totalCost = firstCycleCost + secondCycleCost + remaningCycleCost;

    return totalCost;
    }

}

var total = hotelCost("30")
console.log(total);





       
function megaFriend(name){

    var largestString = 0;
    var largestName;
    for(var i = 0; i < name.length; i++){
         //Check which string length is largest and set the largest name in a variable 
        if (largestString < name[i].length){
                largestName = name[i];
                largestString = name[i].length;
                
        }
    }
return largestName;
}

var nameList = ["Ms Sameya Hasan Khan","Shahana Sultana","biddasagor"];
var result = megaFriend(nameList)
console.log(result);