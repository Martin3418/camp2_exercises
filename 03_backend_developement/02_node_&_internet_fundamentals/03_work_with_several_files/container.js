
const container = {
  litersOfCoffee: 0,
  putLitersOfCoffee: function (numberOfLiters) {
    this.litersOfCoffee += numberOfLiters;
  },
  consumeLitersOfCoffee: function (numberOfLiters) {
    if (this.litersOfCoffee >= numberOfLiters) {
      this.litersOfCoffee -= numberOfLiters;
      return true;
    } else {
      return false;
    }
  }
};


module.exports = container;
