const container = require("./container");



const machine = {
  fillWithLitersOfCoffee: function(volume) {
    container.putLitersOfCoffee(volume);
    return container.litersOfCoffee;
  },
  expresso: function() {
    const volumeExpresso = 0.08;
    if (container.consumeLitersOfCoffee(volumeExpresso)) {
      return true;
    } else {
      return false;
    }
  },
  longCoffee: function() {
    const volumeLongCoffee = 0.15;
    if (container.consumeLitersOfCoffee(volumeLongCoffee)) {
      return true;
    } else {
      return false;
    }
  },
};

// machine.fillWithLitersOfCoffee(0.5);
// console.log(container.litersOfCoffee);
// console.log(machine.expresso()); // => true
// console.log(container.litersOfCoffee);
// console.log(machine.longCoffee()); // => true
// console.log(container.litersOfCoffee);
// console.log(machine.longCoffee()); // => true
// console.log(container.litersOfCoffee);
// console.log(machine.longCoffee()); // => false
// console.log(container.litersOfCoffee);
// console.log(machine.expresso()); // => true
// console.log(container.litersOfCoffee);
// console.log(machine.expresso()); // => false

module.exports = machine;
