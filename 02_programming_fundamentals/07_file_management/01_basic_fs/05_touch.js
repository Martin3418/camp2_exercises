// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.

const path = require("path");
const fs = require("fs");
const new_file = "new_textfile.txt";

function touch(fileName) {
  fs.open(fileName, "w+", (error, fd) => {
    if (error) {
      console.warn(error);
    } else {
      console.log("Your file is created!");
    }
    return;
  });
}
touch(new_file);
module.exports = touch;
