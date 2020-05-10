function XO(str) {
    const lowLetterSplit = str.toLowerCase().split('');
    let x = 0;
    let o = 0;
    for (i = 0; i < lowLetterSplit.length; i++) {
        if (lowLetterSplit[i] === 'x') {
            x += 1;
        } else if (lowLetterSplit[i] === 'o') {
            o += 1;
        };
    };

    if (x === o) {
        return true;
    } else if (x === 0 && o === 0) {
        return true;
    } else {
        return false;
    }

}

module.exports = XO;
