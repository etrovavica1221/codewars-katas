function mergeArrays(a, b) {
    let count = 1;
    for (let i = 0; i < b.length; i++) {
      a.splice(count,0,b[i]);
      count +=2;
    }
return a;
}

module.exports = mergeArrays;
  