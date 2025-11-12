function capitalize(string) {
    if (typeof string !== 'string' || string.length === 0) return '';
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
    const arr = string.split('');
    return arr.reverse().join('');
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }

}

module.exports = {
    capitalize,
    reverseString,
    calculator
};