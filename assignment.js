

// This is function for  kilometerToMeter
function kilometerToMeter(km){
        var meter = 0;
        for(var i = 0; i<=meter; i++){
          // chaking for minus result
            if(km > 0){
                m=km*1000
                return m;
            }
            else{
                return false;
            }

    }
}

var result = kilometerToMeter(3);
console.log(result);

// This is function for  budgetCalculator
  var clock = 50;
  var phone = 100;
  var laptop = 500;
    function budgetCalculator(clock1 , phone1 ,laptop1){
        var clockContainer = clock * clock1;
        var containerPhone = phone * phone1;
        var laptopContainer = laptop * laptop1;
        var totalparameter =  clockContainer + containerPhone + laptopContainer;
        return totalparameter;
    }
var result = budgetCalculator( 1 , 1, 1);
console.log(result);


// This is function for  hotelCost

function hotelCost(stayDays){
   var amount = 0;

        if(stayDays <= 10){
            var amount = stayDays * 100;
        }else if(stayDays <= 20){
            var firstTenDays = 10 * 100;
            var containtValue = stayDays -10;
            var secoundTenDays = containtValue * 80;
            amount = firstTenDays + secoundTenDays;

        }else{
            var firstTenDays = 10 * 100;
            var secoundTenDays = 10 * 80;
            var containtValue = stayDays -20;
            var overTwenty = containtValue * 50;
            amount = firstTenDays + secoundTenDays + overTwenty;

}
    return amount;
}

var result = hotelCost(25);
console.log(result);


// This is function for  megaFriend

var myFriends = ["kamal", "jamal", "hublu", "hubluTheGreat", "puglu", "rafequl"];

    function megaFriend(arr) {
      var long1 = arr[0];
        for (i = 0; i < arr.length; i++) {
            if (arr[i].length > long1.length) {
              long1 = arr[i];
            }
        }
      return long1;
    }

var result = megaFriend(myFriends);
console.log(result);



















