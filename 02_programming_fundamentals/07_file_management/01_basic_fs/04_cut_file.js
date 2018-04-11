// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const path = require("path");
const fs = require("fs");
const sourceFilename = "/Users/Martin/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/tests/test_02.txt";
const targetFilename = "/Users/Martin/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/tests/test_other/test_02.txt";
function deleteFile(path) {
  fs.stat(path, (error, stats) => {
    if (error) {
      console.warn(error);
    } else if (stats.isFile(path)) {
      fs.unlink(path, error => {
        if (error) {
          console.warn(error);
        } else {
          console.log(`File cut from ${sourceFilename} and paste to ${targetFilename}!`);
        }
        return;
      });
    }
    return;
  });
}

function cutPaste(sourceFilename, targetFilename) {
  fs.copyFile(sourceFilename, targetFilename, fs.constants.COPYFILE_EXCL, (error) => {
    if (error) {
      console.warn(error);
      return;
    } else {
      deleteFile(sourceFilename);
    }
  });
}

cutPaste(sourceFilename, targetFilename);


module.exports = cutPaste;
