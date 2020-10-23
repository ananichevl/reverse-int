module.exports = function reverse(n) {
    let number = n.toString();

    let sign = number[0] === '-' ? '-' : '';

    if(sign) {
        number = number.slice(1);
    }

    let result = '';

    for (let i = number.length - 1; i >= 0; i--) {
        result += number[i];
    }

    return result;
};
