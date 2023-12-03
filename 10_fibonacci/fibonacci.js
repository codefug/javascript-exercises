const fibonacci = function(n) {
    if (+n<=-1 || +n==NaN){
        return "OOPS"
    }

    if (+n<=2){
        return 1;
    }
    return +fibonacci(n-1)+fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
