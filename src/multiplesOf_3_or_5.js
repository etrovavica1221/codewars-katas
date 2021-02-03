function solution(number){
  
    let numbers = [...Array(number).keys()];
    let multiples = [];
  
    for (let i=0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        if (numbers[i]%3 === 0 || numbers[i]%5 === 0) {
          multiples.push(numbers[i]);
        }
      }  
    }
    return multiples.reduce((a,b) => a + b,0);
}

module.exports = solution;