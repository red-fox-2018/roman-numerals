function toRoman(num){
   var roman=["MMCM","MMD","MMCD","M","CM","D","C","XC","L","XL","X","IX","V","IV","I"]
   var nomer=[2900,2500,2400,1000,900,500,100,90,50,40,10,9,5,4,1]
   var str=""
   for(var i=0; i<nomer.length; i++){
        while(num-nomer[i]>=0){
            num-=nomer[i]
            str+=roman[i]
       }
   }
console.log(str)
}

// console.log(toRoman(14))
// console.log(toRoman(8))
// console.log(toRoman(39))
console.log(toRoman(2999))
// console.log(toRoman(200))