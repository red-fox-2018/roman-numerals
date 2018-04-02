// let roman=["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
// let arabic=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//
// function romanNumeral(num) {
// let result='';
//     for (var i = 0; i < arabic.length ; i++) {
//         while(num >= arabic[i]){
//           result += roman[i]
//           num-=arabic[i]
//         }
//     }
// return result
// }

 let objkamus = { 1000:"M", 900:"CM", 500:"D", 400:"CD", 100:"C", 90:"XC", 50:"L", 40:"XL", 10:"X", 9:"IX", 5:"V", 4:"IV", 1:"I"

}
function romanNumeral(num) {
let result=''
  while(num > 0){
    if(num >=1000){
      result += objkamus[1000]
      num-= 1000
      //console.log(num);
    }else if(num >= 900){
      result += objkamus[900]
      num-= 900
      //console.log(num);
    }else if(num >= 500){
      result += objkamus[500]
      num-= 500
      //console.log(num);
    }else if(num >= 400){
      result += objkamus[400]
      num-= 400
      //console.log(num);
    }else if(num >= 100){
      result += objkamus[100]
      num-= 100
      //console.log(num);
    }else if(num >= 90){
      result += objkamus[90]
      num-= 90
      //console.log(num);
    }else if(num >= 50){
      result += objkamus[50]
      num-= 50
      //console.log(num);
    }else if(num >= 40){
      result += objkamus[40]
      num-= 40
      //console.log(num);
    }else if(num >= 10){
      result += objkamus[10]
      num-= 10
      //console.log(num);
    }else if(num >= 9){
      result += objkamus[9]
      num-= 9
      //console.log(num);
    }else if(num >= 5){
      result += objkamus[5]
      num-= 5
      //console.log(num);
    }else if(num >= 4){
      result += objkamus[4]
      num-= 4
      //console.log(num);
    }else if(num >= 1){
      result += objkamus[1]
      num-= 1
      //console.log(num);
    }

  }
return result
}

 console.log(romanNumeral(3));
console.log(romanNumeral(1438));
console.log(romanNumeral(115));
console.log(romanNumeral(53));
console.log(romanNumeral(20));
console.log(romanNumeral(5));
console.log(romanNumeral(9));
console.log(romanNumeral(23));
console.log(romanNumeral(143));
console.log(romanNumeral(1646));
