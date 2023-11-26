const leapYears = function(year) {
// divisable by 4 by 400 not by 100 
// else > not leap
if (year%4!=0 || (year%400!=0 && year%100==0)){
    return false;
};return true;
};

// Do not edit below this line
module.exports = leapYears;
