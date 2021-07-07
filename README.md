# roman-numerals

PSEUDOCODE

STORE 'num' with number value
STORE 'roman' with nested array value
STORE 'roman' nested index 0 with numeral value
STORE 'roman' nested index 1 with roman value  
STORE result with no value
STROE 'i' with 0
FOR 'i' equal to 0, 'i' less than 'roman' length, ADD 'i' by 1
    WHILE 'num' less than equal to 'roman' index i,0
        MINUS 'num' by 'roman' index i,0
        SUM 'result' by 'roman' index i,1
    RETURN 'result'
