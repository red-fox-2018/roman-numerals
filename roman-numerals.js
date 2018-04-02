
function toRoman(int){
  let result = []

  while(int >= 1000){
    result.push('M')
    int -= 1000
  }

  while(int >= 900){
    result.push('CM')
    int -= 900
  }

  while(int >= 500){
    result.push('D')
    int -= 500
  }

  while(int >= 400){
    result.push('CD')
    int -= 400
  }

  while(int >= 100){
    result.push('C')
    int -= 100
  }

  while(int >= 90){
    result.push('XC')
    int -= 90
  }

  while(int >= 50){
    result.push('L')
    int -= 50
  }

  while(int >= 40){
    result.push('XL')
    int -= 40
  }

  while(int >= 10){
    result.push('X')
    int -= 10
  }

  while(int >= 9){
    result.push('IX')
    int -= 9
  }

  while(int >= 5){
    result.push('V')
    int -= 5
  }

  while(int >= 4){
    result.push('IV')
    int -= 4
  }

  while(int >= 1){
    result.push('I')
    int -= 1
  }

  return result.join('')
}


console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('------|----------|---------');
console.log('4     | IV       |', toRoman(4));
console.log('9     | IX       |', toRoman(9));
console.log('23    | XXIII    |', toRoman(23));
console.log('1453  | MCDLIII  |', toRoman(1453));
console.log('1646  | MDCXLVI  |', toRoman(1646));
