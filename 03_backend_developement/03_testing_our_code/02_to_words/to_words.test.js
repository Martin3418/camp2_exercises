const toWords = require("./to_words");

test("test if sentence is a string", function() {
  const result = toWords("something like a sentence!");
  expect(typeof result[0]).toBe("string");
});

test("test if sentence has weird punctuation signs", function() {
  const result = toWords("something like, let's say...; we'll see later!");
  expect(result[6]).toBe("later");
});
