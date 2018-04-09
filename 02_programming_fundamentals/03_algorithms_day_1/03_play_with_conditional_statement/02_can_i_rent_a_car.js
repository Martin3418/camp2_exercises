// Do not pay attention to this line for the moment
const driverData = require("./.driver_data");

// These are the variables against which you should test
// driverLicense is a string with the kind of license (ex: AM, B, D...)
const driverLicense = driverData.driverLicense;
// licenseIssued is an integer with the year it was issued (ex: 2001)
const licenseIssued = driverData.licenseIssued;
// numberOfAccident is an integer with the number of accidents.
const numberOfAccident = driverData.numberOfAccident;
// bonus is a float that represent the driver's bonus
const bonus = driverData.bonus;

// Assign a boolean to this variable:
//   `true` if the driver can rent a car
//   `false` if not
let canRentACar = false;

console.log(2018 - driverData.licenseIssued >= 2);

// Your code here:
if (driverData.driverLicense >= "B" && 2018 - driverData.licenseIssued >= 2 && (driverData.numberOfAccident === 0 || driverData.bonus >= 0.7)) {
  canRentACar = true;
  console.log("Oui, tu peux louer");
} else {
  canRentACar = false;
  console.log("Non, tu ne remplis pas tous les critères");
}
