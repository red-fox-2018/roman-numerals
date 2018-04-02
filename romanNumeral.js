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



function romanNumeral(num) {
let objkamus = { "M":1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1}
let result=''
while(num > 0){
    for (var roman in objkamus) {
       if(num >= objkamus[roman]){
         //console.log(`=========${roman},   ${objkamus[roman]}`);
         result += roman
         num -= objkamus[roman]
      }
    }

    // if(num >=1000){
    //   result += objkamus[1000]
    //   num-= 1000
    //   //console.log(num);
    // }else if(num >= 900){
    //   result += objkamus[900]
    //   num-= 900
    //   //console.log(num);
    // }else if(num >= 500){
    //   result += objkamus[500]
    //   num-= 500
    //   //console.log(num);
    // }else if(num >= 400){
    //   result += objkamus[400]
    //   num-= 400
    //   //console.log(num);
    // }else if(num >= 100){
    //   result += objkamus[100]
    //   num-= 100
    //   //console.log(num);
    // }else if(num >= 90){
    //   result += objkamus[90]
    //   num-= 90
    //   //console.log(num);
    // }else if(num >= 50){
    //   result += objkamus[50]
    //   num-= 50
    //   //console.log(num);
    // }else if(num >= 40){
    //   result += objkamus[40]
    //   num-= 40
    //   //console.log(num);
    // }else if(num >= 10){
    //   result += objkamus[10]
    //   num-= 10
    //   //console.log(num);
    // }else if(num >= 9){
    //   result += objkamus[9]
    //   num-= 9
    //   //console.log(num);
    // }else if(num >= 5){
    //   result += objkamus[5]
    //   num-= 5
    //   //console.log(num);
    // }else if(num >= 4){
    //   result += objkamus[4]
    //   num-= 4
    //   //console.log(num);
    // }else if(num >= 1){
    //   result += objkamus[1]
    //   num-= 1
    //   //console.log(num);
    // }

  }
return result
}

//console.log(objkamus.length);
console.log(romanNumeral(4));
console.log(romanNumeral(1438));
console.log(romanNumeral(115));
console.log(romanNumeral(53));
console.log(romanNumeral(20));
console.log(romanNumeral(5));
console.log(romanNumeral(9));
console.log(romanNumeral(23));
console.log(romanNumeral(143));
console.log(romanNumeral(1646));
