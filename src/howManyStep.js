function howManyStep(a,b) {  
  
    let mainNumbers = [];
    
    function getNumbers(mainNumbers, b) {
      if (b >= 2) { 
        mainNumbers.push(Math.floor(b/2));
        return getNumbers(mainNumbers, Math.floor(b/2)); 
      } else {
        return mainNumbers;
      } 
    } 
    
    getNumbers(mainNumbers, b);
    
    function findSteps(a, b) {
      let count = 0;
    
      if (a === b) {
        return count;
      } else if (mainNumbers.includes(a)) {
        count++;
        return count + findSteps(a * 2,b);   
      } else {
        count++;
        return count + findSteps(a + 1, b);
      } 
    } 
    
    return findSteps(a,b);
}

module.exports = howManyStep;