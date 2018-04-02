

 let roman=['I','IV','V','VI','VII','VIII','IX','X','XL','L','LX','LXX','LXXX','XC','C','CD','D','DC','DCC','DCCC','CM','M']
 let arabic=[1,4,5,6,7,8,9,10,40,50,60,70,80,90,100,400,500,600,700,800,900,1000]




function romanNumeral(num) {
let result='';
//let liatliat=''

    for (var i = arabic.length-1; i >= 0 ; i--) {
        while(num >= arabic[i]){
          num-=arabic[i]
          result += roman[i]
          //liatliat += arabic[i]+' '
        }
    }
//console.log(liatliat);
return result
}

// let objkamus = {
//  1:'I',
//  4:'IV',
//  5:'V',
//  6:'VI',
//  7:'VII',
//  8:'VIII',
//  9:'IX',
//  10:'X',
  // 'XX':20,
  // 'XXX':30,
  // 'XL':40,
  // 'L':50,
  // 'LX':60,
  // 'LXX':70,
  // 'LXXX':80,
  // 'XC':90,
  // 'C':100,
  // 'CC':200,
  // 'CCC':300,
  // 'CD':400,
  // 'D':500,
  // 'DC':600,
  // 'DCC':700,
  // 'DCCC':800,
  // 'CM':900,
  // 'M':1000
//}


// function romanNumeral(num) {
// let result=''
//   while(num!==0){
//     if(num<4){
//       result += objkamus[1]
//       num-= 1
//     }
//
//   }
// return result
// }

console.log(romanNumeral(3));
console.log(romanNumeral(1400));
console.log(romanNumeral(115));
console.log(romanNumeral(53));
console.log(romanNumeral(20));
console.log(romanNumeral(5));
console.log(romanNumeral(9));
console.log(romanNumeral(23));
console.log(romanNumeral(1463));
console.log(romanNumeral(1646));
