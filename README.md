# roman-numerals

deklarasi angkaInput = 3
deklarasi arrRoman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
deklarasi arrArabic = [1, 5, 10, 50, 100, 500, 1000]
deklarasi angkaRomawi = ''
looping selama angkaInput tidak sama dengan 0
  looping dari i=0 sampai i<arrArabic.length, perulangan i+1
    if(angkaInput === 4){
      debugger
      angkaRomawi += 'IV'
      angkaInput -= 4
    }
    else if(angkaInput === 9){
      debugger
      angkaRomawi += 'IX'
      angkaInput -= 9
    }
    else if(angkaInput >= 40 && angkaInput < 50){
      debugger
      angkaRomawi += 'XL'
      angkaInput -= 40
    }
    else if(angkaInput >= 90 && angkaInput < 100){
      debugger
      angkaRomawi += 'XC'
      angkaInput -= 90
    }
    else if(angkaInput >= 400 && angkaInput < 500){
      debugger
      angkaRomawi += 'CD'
      angkaInput -= 400
    }
    else if(angkaInput >= 900 && angkaInput < 1000){
      debugger
      angkaRomawi += 'CM'
      angkaInput -= 900
    }
    else if(angkaInput >= 1000){
      debugger
      angkaRomawi += 'M'
      angkaInput -= 1000
    }
      if (angkaInput lebih kecil arrArabic[i] dan lebih besar dari arrArabic[i-1]) maka
      angkaRomawi += arrRoman[i]
      angkaInput -= arrArabic[i]
cetak angkaRomawi
