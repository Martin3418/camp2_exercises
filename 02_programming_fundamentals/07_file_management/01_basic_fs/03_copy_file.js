// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const path = require("path");
const fs = require("fs");

function copyPaste(sourceFilename, targetFilename) {
  fs.copyFile(sourceFilename, targetFilename, fs.constants.COPYFILE_EXCL, (error) => {
    if (error) {
      console.warn(error);
      return;
    }
  });
}

copyPaste(
  "/Users/Martin/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/tests/test_02.txt",
  "/Users/Martin/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/tests/test_other/test_02.txt"
);

module.exports = copyPaste;
