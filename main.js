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
        if(typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Inputs must be numbers');
        }

        if(b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }

}

function caesarCipher(string, key) {
    const alphabets = [
'a', 'b', 'c', 'd', 'e', 'f', 'g',
'h', 'i', 'j', 'k', 'l', 'm', 'n',
'o', 'p', 'q', 'r', 's', 't', 'u',
'v', 'w', 'x', 'y', 'z'
];

let result = '';

for (let char of string) {
    const index = alphabets.indexOf(char.toLowerCase());
    if (index === -1) {
        result += char;
    } else {
        const newIndex = (index + key) % alphabets.length;
        const letter = alphabets[newIndex];
        result += (char === char.toUpperCase() ? letter.toUpperCase() : letter);
    }
}
return result;
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
};