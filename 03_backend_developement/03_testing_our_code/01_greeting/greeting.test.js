const greet = require("./greeting");

test("test if greeting name called is world", function() {
  const result = greet();
  expect(result).toBe("Hello WORLD!");
});

test("test if greeting name is upperCase", function() {
  const result = greet("something");
  expect(result).toBe("Hello SOMETHING!");
});
