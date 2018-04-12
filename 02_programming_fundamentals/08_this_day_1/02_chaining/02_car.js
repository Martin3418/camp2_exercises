// See Sparta courses for the exercise summary
const car = {
  carSpeed: 0,
  carMinutes: 0,
  drivingDistance: 0,
  start: function () {
    this.carSpeed = 0;
    this.carMinutes = 0;
    this.drivingDistance = 0;
    return this;
  },
  changeSpeed: function (speed) {
    this.carSpeed = speed;
    return this;
  },
  drive: function (minutes) {
    this.carMinutes = minutes;
    this.drivingDistance += this.carSpeed * this.carMinutes / 60;
    return this;
  },
  showDistance: function () {
    console.log(`${this.drivingDistance} Km`);
    return this;
  }
};
car.start().changeSpeed(130).drive(42).showDistance();
module.exports = car;
