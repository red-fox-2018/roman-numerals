function toRoman(num){
  let arabicNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  let romanNum = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']

  let result = '';
  for(let i = arabicNum.length -1; i >= 0; i--){
    while (num >= arabicNum[i]) {
      num -= arabicNum[i]
      result += romanNum[i]
    }
  }
  return result;

}

console.log('My totall sweet testing script\n');
console.log('input  | expected | actual');
console.log('-------|----------|------|');
console.log('4      | IV       |', toRoman(4));
console.log('9      | IX       |', toRoman(9));
console.log('23     | XXIII    |', toRoman(23));
console.log('1453   | MCDLIII  |', toRoman(1453));
console.log('1646   | MDCXLVI  |', toRoman(1646));
