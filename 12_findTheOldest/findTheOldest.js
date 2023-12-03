// const findTheOldest = function(array) {
//     let nowyear = new Date().getFullYear();
//     return array.reduce((accum,grow)=>{
//         old = grow.yearOfDeath!=undefined ? 
//         grow.yearOfDeath-grow.yearOfBirth: nowyear-grow.yearOfBirth;
//         prev = accum.yearOfDeath!=undefined ? 
//         accum.yearOfDeath-accum.yearOfBirth: nowyear-accum.yearOfBirth;
//         if (old<prev){ return accum;}
//         else{ return grow;}
//     })
// };

//This can be done with a couple of chained array methods
const findTheOldest = function(array){
    let nowyear=new Date().getFullYear();
    array.sort((accum,grow)=>{
        old = grow.yearOfDeath!=undefined ? 
        grow.yearOfDeath-grow.yearOfBirth: nowyear-grow.yearOfBirth;
        prev = accum.yearOfDeath!=undefined ? 
        accum.yearOfDeath-accum.yearOfBirth: nowyear-accum.yearOfBirth;
        if (prev>old){ return -1;}
        else{ return 1;}
    })
    return array[0];
}

// [{birth:~,death year: ~}, ...]
// return the oldest person whole person object

// Do not edit below this line
module.exports = findTheOldest;