// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");

function copyPaste(sourceFilename, targetFilename) {
  fs.readFile(sourceFilename, (error, data) => {
    if (error) {
      console.warn(error);
      return;
    } fs.writeFile(targetFilename, (error, data) => {
      if (error) {
        console.warn(error);
        return;
      }
    });
  });
}
// add function fs.exist
copyPaste(
  "./tests/test_02.txt",
  "./tests/test_other/test_02.txt"
);

module.exports = copyPaste;
