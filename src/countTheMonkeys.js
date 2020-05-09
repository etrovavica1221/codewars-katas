function monkeyCount(n) {
    let monkeys = [];
    for (i = 1; i <= n; i++) {
    monkeys.push(i);
   };
   return monkeys;
  }; 

  module.exports = monkeyCount;
