

function toRoman(num) {
  
  let m = ['', 'M', 'MM', 'MMM'];
  let c = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  let x = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  let i = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  let ribu = m[Math.floor(num / 1000)];
  let ratus = c[Math.floor((num % 1000) / 100)];
  let puluh = x[Math.floor((num % 100) / 10)];
  let satu = i[num % 10];

  let result = ribu + ratus + puluh + satu;

  return result;
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('13    | XIII     | ', toRoman(13))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))