function toRoman(num) {
  // let arr = [[1,'I'], [5, 'V'], [10, 'X'], [50, 'L'], [100, 'C'], [500, 'D'], [1000, 'M']];
  let obj = {M:1000,
             CM:900, 
             D:500,
             CD:400, 
             C:100,
             XC:90,
             L:50,
             XL:40,
             X:10,
             IX:9,
             V:5,
             IV:4,
             I:1}
  let str = '';
  for (let i in obj) {
    while (num >= obj[i]) {
      str += i;
      num -= obj[i]
    }
  }
  return str;
}
console.log('My totally sweet testing script\n');
console.log('  Latin   |   Roman  ');
console.log('----------|----------');
console.log('    4     |'+'    '+toRoman(4));
console.log('    9     |'+'    '+toRoman(9));
console.log('    23    |'+'    '+toRoman(23));
console.log('    1453  |'+'    '+toRoman(1453));
console.log('    1646  |'+'    '+toRoman(1646));


