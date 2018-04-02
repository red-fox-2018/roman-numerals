function toRoman(num) {
    let romanNumerals = [{
        latin: 1000,
        roman: 'M'
    }, {
        latin: 900,
        roman: 'CM'
    }, {
        latin: 500,
        roman: 'D'
    }, {
        latin: 400,
        roman: 'CD'
    }, {
        latin: 200,
        roman: 'CC'
    }, {
        latin: 100,
        roman: 'C'
    }, {
        latin: 90,
        roman: 'XC'
    }, {
        latin: 50,
        roman: 'L'
    }, {
        latin: 40,
        roman: 'XL'
    }, {
        latin: 20,
        roman: 'XX'
    }, {
        latin: 10,
        roman: 'X'
    }, {
        latin: 9,
        roman: 'IX'
    }, {
        latin: 5,
        roman: 'V'
    }, {
        latin: 4,
        roman: 'IV'
    }, {
        latin: 1,
        roman: 'I'
    }];

    let result = '';

    while (num > 0) {
        for (let i = 0; i < romanNumerals.length; i++) {
            if (num >= romanNumerals[i].latin) {
                result += romanNumerals[i].roman;
                num -= romanNumerals[i].latin;
            }
        }
    }

    return result;
}

console.log('My totally sweet testing script\n');
console.log('input  |  expected  |  actual');
console.log('_______|____________|_________');
console.log(' 4     | IV         |', toRoman(4));
console.log(' 9     | IX         |', toRoman(9));
console.log(' 23    | XXIII      |', toRoman(23));
console.log(' 1453  | MCDLIII    |', toRoman(1453));
console.log(' 1646  | MDCXLVI    |', toRoman(1646));