function derive(coefficient,exponent) {
    if (exponent <= 1 || coefficient === 0) {
        return false;
    } else if (exponent === 2) {
        return false;
    } else {
        const multipl = coefficient * exponent; 
        return `${multipl}x^${exponent-1}`
    };  
}

module.exports = derive;