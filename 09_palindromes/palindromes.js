const palindromes = function (str) {
    const processedString=str.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').join('');
    return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;