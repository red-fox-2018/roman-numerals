# roman-numerals

initiatr input as num
initiate kamus roman ['I','IV','V','VI','VII','VIII','IX','X','XL','L','LX','LXX','LXXX','XC','C','CD','D','DC','DCC','DCCC','CM','M']
initiate kamus arabic[1,4,5,6,7,8,9,10,40,50,60,70,80,90,100,400,500,600,700,800,900,1000]
initiate result as empty string

for[ i=0, i less arabic.length, i add by 1 every looping]
    if[num is less or equal than arabic array i]
            result add by roman array i
            num  min arabic array i
end looping
return result
