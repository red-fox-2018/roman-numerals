/*
PSEUDOCODE

1. buat variabel untuk menampung angka dan buat juga variabel untuk menampung angka romawi dengan urutan yang sama
2. buat variabel hasil berisi string kosong
3. selama num tidak sama dengan nol
  3.a. loop sepanjang angka dari depan ke belakang
    3.a.i. jika num lebih besar dari angka[i]
      3.a.i.a. num dikurangkan dengan angka[i] dan var hasil string kosong ditambah dengan roman[i]
4. return hasil
*/



function toRoman(num) {
  var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  var roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'];
  var hasil = '';

  while (num != 0) {
    for (var i = angka.length - 1; i >= 0; i--) {
      if (num >= angka[i]) {
        num -= angka[i];
        hasil += roman[i]
      }
    }
  }
  return hasil
}

console.log(toRoman(1646));
