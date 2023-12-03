const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
	return array.reduce((s,i)=>{s+=i; return s},0)
};

const multiply = function(array) {
  return array.reduce((s,i)=>{s*=i; return s})
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
  let result=1;
	for (let i =2; i<=a;i++){
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
