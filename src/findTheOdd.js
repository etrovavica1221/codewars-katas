function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
      let repeat = A.filter(x => x === A[i]).length;
      if (repeat%2 === 1) {
        return A[i];
      };
    };
};

module.exports = findOdd;