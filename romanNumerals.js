function toRoman(angka) {
  var roman=['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var arabic=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 
  var store='';	
  for(var i=0;i<roman.length;i++) {
  
    while(arabic[i]<=angka){
      store+=roman[i];
      angka=angka-arabic[i];  
    }
  }
  return store;

}

console.log(toRoman(4));
console.log(toRoman(9));
console.log(toRoman(23));
console.log(toRoman(1453));
console.log(toRoman(1646));



