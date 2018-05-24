const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car
const currentYear = (new Date()).getFullYear();
function canRentACar(driverA) {
  if (driverA.driverLicense < "C"
   && currentYear - driverA.licenseIssued >= 2
   && (driverA.numberOfAccident = 0 || driverA.bonus >= 0.7)) {
    return true;
  } else {
    return false;
  }
}
console.log(canRentACar(driver));






//correction initiale

function canRentACar2() {
  if (driver.driverLicense <= "C" && driver.licenseIssued <= new Date().getFullYear() - 2 && (driver.numberOfAccident === 0 || driver.bonus >= 0.7)) {
    return true;
  } else {
    return false;
  }
}
console.log(canRentACar2(driver));

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
