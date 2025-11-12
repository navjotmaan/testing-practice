function capitalize(string) {
    if (typeof string !== 'string' || string.length === 0) return '';
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
    const arr = string.split('');
    return arr.reverse().join('');
}

module.exports = {
    capitalize,
    reverseString
};