/*jshint esversion: 6*/

function toRoman(input) {

  let result = '';
  let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'LX', 'C', 'CD', 'D', 'DC', 'M'];
  let decimal = [1, 4, 5, 9, 10, 40, 50, 60, 100, 400, 500, 600, 1000];

  for (let i = decimal.length - 1; i >= 0; i--) {
    if (input - decimal[i] >= 0) {
      result += roman[i];
      input -= decimal[i];
      i++;
    }
  }
  return result;
}

// Drive code
console.log('My totally sweet testing script for new roman\n');
console.log('input | expected | actual');
console.log('——————|——————————|———————');
console.log('1     | I        | ', toRoman(1));
console.log('4     | IV       | ', toRoman(4));
console.log('9     | IX       | ', toRoman(9));
console.log('13    | XIII     | ', toRoman(13));
console.log('1453  | MCDLIII  | ', toRoman(1453));
console.log('1646  | MDCXLVI  | ', toRoman(1646));
