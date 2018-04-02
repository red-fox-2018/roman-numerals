# roman-numerals

**PSEUDOCODE**

SET int WITH input from user
SET result WITH []

WHILE int >= 1000
  DO  PUSH result WITH M AND CALCULATE int - 1000

WHILE int >= 900
  DO PUSH result WITH CM CALCULATE int - 900

WHILE int >= 500
  DO PUSH result WITH D AND CALCULATE int - 500

WHILE int >= 400
  DO PUSH result WITH CD AND CALCULATE int - 400

WHILE int >= 100
  DO PUSH result WITH C AND CALCULATE int - 100

WHILE int >= 90
  DO PUSH result WITH XC AND CALCULATE int - 90

WHILE int >= 50
  DO PUSH result WITH L AND CALCULATE int - 50

WHILE int >= 40
  DO PUSH result WITH XL AND CALCULATE int - 40

WHILE int >= 10
  DO PUSH result WITH X AND CALCULATE int - 10

WHILE int >= 9
  DO PUSH result WITH IX AND CALCULATE int - 9

WHILE int >= 5
  DO PUSH result WITH V AND CALCULATE int - 5

WHILE int >= 4
  DO PUSH result WITH IV AND CALCULATE int - 4

WHILE int >= 1
  DO PUSH result WITH I AND CALCULATE int - 1

return result JOIN WITH ''
