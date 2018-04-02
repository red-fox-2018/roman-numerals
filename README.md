# roman-numerals
FUNCTION toRoman parameter input

SET result sama dengan ''
SET roman sama dengan array dengan nilai 'I','IV','V','IX','X','XL','L','LX','C','CD','D','DC','M'
SET decimal sama dengan array dengan nilai 1,4,5,9,10,40,50,60,100,400,500,600,1000

    LOOP dari index i = panjang nilai decimal dikurangi satu, index i lebih besar sama dengan 0 dengan decrement satu
      IF input dikurangi decimal index i lebih besar sama dengan 0
        result sama dengan result ditambah roman index i
        input sama dengan input dikurangi decimal index i
        index i increment satu
      END IF
    END LOOP
  RETURN result
END FUNCTION
