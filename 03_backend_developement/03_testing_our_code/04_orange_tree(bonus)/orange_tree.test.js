const orangeTreeObj = require("./orange_tree.js");

describe("attributes of orangeTree object", function() {
  test("test if age value is 0 when seeded", function() {
    const result = orangeTreeObj.age;
    expect(result).toEqual(0);
  });

  test("test if alive value is true when seeded", function() {
    const result = orangeTreeObj.alive;
    expect(result).toEqual(true);
  });

  test("test if height value is 0 when seeded", function() {
    const result = orangeTreeObj.height;
    expect(result).toEqual(0);
  });

  test("test if orange value is 0 when seeded", function() {
    const result = orangeTreeObj.oranges;
    expect(result).toEqual(0);
  });
});

test("test of ageing 4 years", function() {
  for (let i = 1; i <= 4; i++) {
    orangeTreeObj.ageOneYear();
  }
  const result1 = orangeTreeObj.age;
  const result2 = orangeTreeObj.alive;
  const result3 = orangeTreeObj.height;
  const result4 = orangeTreeObj.oranges;
  expect(result1).toEqual(4);
  expect(result2).toEqual(true);
  expect(result3).toEqual(100);
  expect(result4).toEqual(0);
});

test("test if an orange can be picked", function() {
  orangeTreeObj.pickAnOrange();
  const result = orangeTreeObj.oranges;
  expect(result).toEqual(0);
});

test("test of ageing 20 years", function() {
  for (let i = 1; i <= 16; i++) {
    orangeTreeObj.ageOneYear();
  }
  const result1 = orangeTreeObj.age;
  const result2 = orangeTreeObj.alive;
  const result3 = orangeTreeObj.height;
  const result4 = orangeTreeObj.oranges;
  expect(result1).toEqual(20);
  expect(result2).toEqual(true);
  expect(result3).toEqual(325);
  expect(result4).toEqual(5);
});

test("test if an orange can be picked", function() {
  orangeTreeObj.pickAnOrange();
  const result = orangeTreeObj.oranges;
  expect(result).toEqual(4);
});

test("test of ageing 49 years", function() {
  for (let i = 1; i <= 29; i++) {
    orangeTreeObj.ageOneYear();
  }
  const result1 = orangeTreeObj.age;
  const result3 = orangeTreeObj.height;
  const result4 = orangeTreeObj.oranges;
  expect(result1).toEqual(49);
  expect(result3).toEqual(325);
  expect(result4).toEqual(0);
});

test("test might die", function() {
  for (let i = 1; i <= 60; i++) {
    orangeTreeObj.ageOneYear();
  }
  const result = orangeTreeObj.alive;
  const result1 = orangeTreeObj.age;
  expect(result).toEqual(false);
  expect(result1).toEqual(109);
});

test("test when seeded", function() {
  orangeTreeObj.seed();
  const result1 = orangeTreeObj.age;
  const result2 = orangeTreeObj.alive;
  const result3 = orangeTreeObj.height;
  const result4 = orangeTreeObj.oranges;
  expect(result1).toEqual(0);
  expect(result2).toEqual(true);
  expect(result3).toEqual(0);
  expect(result4).toEqual(0);
});
