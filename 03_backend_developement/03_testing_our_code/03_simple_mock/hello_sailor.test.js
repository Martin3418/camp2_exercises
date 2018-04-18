const helloSailor = require("./hello_sailor");

test("test if log is what we expect", function() {
  console.log = jest.fn();

  helloSailor("Sailor");

  expect(console.log).toHaveBeenCalled();
  expect(console.log).toHaveBeenCalledWith("Hello Sailor!");
});

test("test if log is what we expect", function() {
  console.log = jest.fn();

  helloSailor();

  expect(console.log).toHaveBeenCalled();
  expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});
