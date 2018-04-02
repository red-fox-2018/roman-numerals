function toRoman(nilai){
    var romawi = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    var angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

    var fixromawi = nilai;
    var fix = ''
    for(var i=0;i<romawi.length;i++){
        while(fixromawi>=angka[i]){
            fix += romawi[i]
            fixromawi -= angka[i]
        }
    }
    return fix
}

console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('4 | IV |', toRoman(4))
console.log('9 | IX |', toRoman(9))
console.log('23 | XXIII |', toRoman(23))
console.log('1453 | MCDLIII |', toRoman(1453))
console.log('1646 | MDCXLVI |', toRoman(1646))