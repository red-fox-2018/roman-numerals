
function toRoman(number){
  const symbol = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
  const value = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
  let arrResult = []
  let result = ''
  for (var i = symbol.length-1; i >= 0; i--) {
    while (number >= value[i]) {
      number -= value[i]
      result += symbol[i]
    }
  }
  return result
}
console.log(toRoman(2789));
