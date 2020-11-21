function lifePathNumber(dateOfBirth) {
    function reduceNumber(str){
      if(str.length === 1){
        return Number(str);      
      }
      //split
      let splitStr = str.split("");
      // add together digits
      let total = 0;
      for (let i = 0;i < splitStr.length; i++){
        total += Number(splitStr[i]);
      }
        return reduceNumber(total.toString());
      
    }
    
    // split str
    let splitDate = dateOfBirth.split("-");
    let yearReduced = reduceNumber(splitDate[0]);
    let monthReduced = reduceNumber(splitDate[1]);
    let dayReduced = reduceNumber(splitDate[2]);
    let totalNum = yearReduced + monthReduced + dayReduced;
    
    // reducenum 
    
    return reduceNumber(totalNum.toString());
}

module.exports = lifePathNumber;