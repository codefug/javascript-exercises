const removeFromArray = function (array, ...element) {
    for (ele of element){
        if (array.includes(ele)){
            array.splice(array.indexOf(ele),1);
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
