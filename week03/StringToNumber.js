function converStringToNumber(string, x = 10) {
    // if (arguments.length < 2) {
    //     x = 10
    // }
    var chars = string.split('');
    var number = 0
    var i = 0
    while (i < chars.length && chars[i] != '.') {
        number = number * x
        number += chars[i].codePointAt(0) - '0'.codePointAt(0)
        i++;
    }

    if (chars[i] === '.') {
        i++;
    }
    var fraction = 1
    while (i < chars.length) {
        fraction = fraction / x
        number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction
        i++;
    }
    return number
}

function converNumberToString(number, x) {
    var integer = Math.floor(number)
    var fraction = number - Math.floor(number)
    var string = ''
    while (integer > 0) {
        string = String(integer % x) + string;
        integer = Math.floor(integer / x)
    }
    return string;
}
console.log(converNumberToString(100, 10))