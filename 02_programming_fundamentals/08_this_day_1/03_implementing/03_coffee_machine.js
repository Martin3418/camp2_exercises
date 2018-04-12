// See Sparta courses for the exercise summary
const machine = {
  litersOfCoffee: 0,
  fillWithLitersOfCoffee: function(volume) {
    this.litersOfCoffee += volume;
    return this;
  },
  expresso: function() {
    let volumeExpresso = 8/100;
    if (this.litersOfCoffee >= volumeExpresso) {
      this.litersOfCoffee -= volumeExpresso;
      return true;
    } return false;
  },
  longCoffee: function() {
    let volumeLongCoffee = 15/100;
    if (this.litersOfCoffee >= volumeLongCoffee) {
      this.litersOfCoffee -= volumeLongCoffee;
      return true;
    } return false;
  },
};
// Coffee Machine usage. Insert your code above this comment

machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false



module.exports = machine;
