// See Sparta courses for the exercise summary
const car = {
  carSpeed: 0,
  drivingDistance: 0,
  start: function () {
    this.carSpeed = 0;
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
car.start().changeSpeed(120).drive(60).changeSpeed(60).drive(30).showDistance();
module.exports = car;
