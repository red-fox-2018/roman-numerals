# roman-numerals

# CREATE function toRoman with one parameter number
#   INITIALIZE romanNumerals to array of object roman and integer
#   INITIALIZE result to empty string
#   WHILE number greater than 0
#       LOOP from 0 to length of romanNumerals and plus one every iteration
#           IF number greater then equal romanNumerals[i].latin, 
#               add romanNumerals[i].roman to result 
#               number minus romanNumerals[i].latin
#   RETURN result