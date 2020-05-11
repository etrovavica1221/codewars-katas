function expressionMatter(a, b, c) {
    let first = a * (b + c);
    let second = a * b * c;
    let third = a + b * c;
    let fourth = (a + b) * c;
    let fifth = a + b + c;
    let arr = [first,second,third,fourth,fifth];
    let x = arr.sort((first,second) => second - first);
    return arr[0];
}

module.exports = expressionMatter;