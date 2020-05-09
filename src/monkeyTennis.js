function ballCollector(detritus) {
 let sum = 0;
 for (i = 0; i < detritus.length; i++) {
    if (detritus[i] === 58) {
     sum += 58;
    };
 }; 
    let objectSum = {
     weight: sum
    }
    return objectSum;
};

module.exports = ballCollector;